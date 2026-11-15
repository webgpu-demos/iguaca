// The forest's voice. Off until asked for: a browser only lets sound start from a tap.
//
// Real recordings, when there are any: public/audio/audio.json lists them,
//
//   { "forest": ["el-yunque.mp3"], "calls": ["call-1.mp3", "call-2.mp3"] }
//
// "forest" is the background (one file, looped with a cross-fade so the seam does not
// show), "calls" are short parrot calls, one played each time the bird calls. Files sit
// beside the list, in public/audio/. mp3 plays everywhere; ogg, wav and m4a where the
// browser can decode them.
//
// With no forest recording, the background is made here instead: a chorus of coquí frogs
// over the hush of wet leaves. A coquí's call is two notes, "co" then a rising "quí",
// about once a second, near 1.2 and 2.2 kHz; every frog has its own pitch, its own pace,
// its own place between the ears and its own distance. With no call recordings, the bird
// calls silently.

interface Frog {
  /** pitch of this frog relative to the textbook one */
  pitch: number;
  /** seconds from one call to the next */
  pace: number;
  pan: number;
  gain: number;
  next: number;
}

interface Manifest {
  forest?: string[];
  calls?: string[];
}

/** seconds the forest recording fades over at its loop seam, and at the start */
const SEAM = 2.5;

/** base: the folder the recordings and audio.json are in, with its trailing slash */
export function createSound(base: string) {
  let ctx: AudioContext | null = null;
  let master: GainNode | null = null;
  /** the made-up chorus's own gain: silent once a real forest is playing */
  let synth: GainNode | null = null;
  let timer = 0;
  let bedTimer = 0;
  let on = false;
  let loading: Promise<void> | null = null;
  let forest: AudioBuffer | null = null;
  const calls: AudioBuffer[] = [];
  let lastCall = -1;
  const frogs: Frog[] = [];

  async function decode(file: string): Promise<AudioBuffer | null> {
    if (!ctx) return null;
    try {
      const res = await fetch(base + file);
      if (!res.ok) return null;
      return await ctx.decodeAudioData(await res.arrayBuffer());
    } catch {
      // not there, or not something this browser can play: go without it
      return null;
    }
  }

  /** read the list and fetch what it names; whatever is missing is simply not used */
  async function load() {
    let list: Manifest = {};
    try {
      const res = await fetch(`${base}audio.json`);
      if (res.ok) list = (await res.json()) as Manifest;
    } catch {
      /* no list: the made-up chorus, a silent call */
    }
    const [bed, ...shouts] = await Promise.all([list.forest?.length ? decode(list.forest[0]) : null, ...(list.calls ?? []).map(decode)]);
    forest = bed;
    for (const b of shouts) if (b) calls.push(b);
  }

  function build() {
    ctx = new AudioContext();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    synth = ctx.createGain();
    synth.connect(master);

    // wet leaves and far water: filtered noise, very low
    const len = ctx.sampleRate * 3;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let b = 0;
    for (let i = 0; i < len; i++) {
      // (a little brown in the white, so it hushes rather than hisses)
      b = b * 0.97 + (Math.random() * 2 - 1) * 0.03;
      d[i] = b * 3 + (Math.random() * 2 - 1) * 0.25;
    }
    const hush = ctx.createBufferSource();
    hush.buffer = buf;
    hush.loop = true;
    const band = ctx.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.value = 2600;
    band.Q.value = 0.4;
    const hushGain = ctx.createGain();
    hushGain.gain.value = 0.035;
    hush.connect(band).connect(hushGain).connect(synth);
    hush.start();

    // seven frogs, near and far, left and right
    for (let i = 0; i < 7; i++) {
      const far = i / 6;
      frogs.push({
        pitch: 0.9 + Math.random() * 0.22,
        pace: 0.95 + Math.random() * 0.5,
        pan: (Math.random() * 2 - 1) * 0.9,
        gain: 0.22 * (1 - 0.75 * far) * (0.7 + Math.random() * 0.5),
        next: ctx.currentTime + 0.3 + Math.random() * 1.5,
      });
    }
  }

  /** one note: a soft-edged whistle from f0 to f1 */
  function note(at: number, dur: number, f0: number, f1: number, gain: number, out: AudioNode) {
    if (!ctx) return;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(f0, at);
    osc.frequency.exponentialRampToValueAtTime(f1, at + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, at);
    g.gain.linearRampToValueAtTime(gain, at + 0.012);
    g.gain.setValueAtTime(gain, at + dur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    osc.connect(g).connect(out);
    osc.start(at);
    osc.stop(at + dur + 0.02);
  }

  /** queue every frog call that falls due in the next half second */
  function schedule() {
    if (!ctx || !synth || forest) return;
    const until = ctx.currentTime + 0.5;
    for (const f of frogs) {
      while (f.next < until) {
        const pan = ctx.createStereoPanner();
        pan.pan.value = f.pan;
        pan.connect(synth);
        const at = Math.max(f.next, ctx.currentTime + 0.01);
        note(at, 0.09, 1180 * f.pitch, 1220 * f.pitch, f.gain * 0.7, pan);
        note(at + 0.21, 0.16, 1900 * f.pitch, 2300 * f.pitch, f.gain, pan);
        // now and then a frog sits one out
        f.next += f.pace * (0.92 + Math.random() * 0.16) * (Math.random() < 0.12 ? 2 : 1);
      }
    }
  }

  /**
   * The forest recording, round and round: each pass fades in over the end of the one
   * before, so where the file ends and begins again cannot be heard.
   */
  function playBed() {
    if (!ctx || !master || !forest || !on) return;
    const seam = Math.min(SEAM, forest.duration / 4);
    const t = ctx.currentTime + 0.05;
    const src = ctx.createBufferSource();
    src.buffer = forest;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.8, t + seam);
    g.gain.setValueAtTime(0.8, t + forest.duration - seam);
    g.gain.linearRampToValueAtTime(0, t + forest.duration);
    src.connect(g).connect(master);
    src.start(t);
    src.stop(t + forest.duration + 0.05);
    bedTimer = window.setTimeout(playBed, (forest.duration - seam) * 1000);
  }

  function start() {
    if (!ctx || !synth) return;
    window.clearInterval(timer);
    window.clearTimeout(bedTimer);
    if (forest) {
      // the real forest takes over from the made-up one
      synth.gain.setTargetAtTime(0, ctx.currentTime, 0.4);
      playBed();
    } else {
      for (const f of frogs) f.next = Math.max(f.next, ctx.currentTime + 0.2 + Math.random() * 1.2);
      schedule();
      timer = window.setInterval(schedule, 200);
    }
  }

  return {
    get on() {
      return on;
    },
    /** what the recordings turned out to be, once they have been looked for: for the page to say, or a test to check */
    get loaded() {
      return { forest: forest !== null, calls: calls.length };
    },
    /** start or stop the sound (from a tap); returns whether it is now on */
    toggle() {
      if (!ctx) build();
      if (!ctx || !master) return false;
      on = !on;
      const t = ctx.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(master.gain.value, t);
      master.gain.linearRampToValueAtTime(on ? 0.6 : 0, t + (on ? 1.2 : 0.4));
      window.clearInterval(timer);
      window.clearTimeout(bedTimer);
      if (!on) return on;
      void ctx.resume();
      // the made-up chorus at once; the recordings as soon as they are in (the first time, a moment later)
      start();
      loading ??= load().then(() => {
        if (on) start();
      });
      return on;
    },
    /** The bird calls: one of the call recordings, never the same one twice running. Silent with the sound off or none to play. */
    call() {
      if (!ctx || !master || !on || calls.length === 0) return false;
      let i = Math.floor(Math.random() * calls.length);
      if (calls.length > 1 && i === lastCall) i = (i + 1) % calls.length;
      lastCall = i;
      const src = ctx.createBufferSource();
      src.buffer = calls[i];
      // (no two calls quite alike: a hair faster or slower)
      src.playbackRate.value = 0.96 + Math.random() * 0.08;
      const g = ctx.createGain();
      g.gain.value = 1.2;
      src.connect(g).connect(master);
      src.start();
      return true;
    },
  };
}
