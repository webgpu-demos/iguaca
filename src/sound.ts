// The forest's voice. Off until asked for: a browser only lets sound start from a tap.
// Two things are asked for apart: "Forest sound" turns the background on and off, and with
// it the calls the bird makes by itself; a tap on "Call" is always heard, sound on or off.
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
//
// The call recordings are small, and fetched ahead (warm()) so the first call is on time
// with the bill; the forest recording is fetched when the sound is first turned on.

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
  /** the background's gain: up with the sound on, down with it off */
  let master: GainNode | null = null;
  /** the bird's own gain: not the background's, so a call that was asked for is heard with the sound off */
  let voice: GainNode | null = null;
  /** the made-up chorus's own gain: silent once a real forest is playing */
  let synth: GainNode | null = null;
  let timer = 0;
  let bedTimer = 0;
  let on = false;
  let list: Promise<Manifest> | null = null;
  let callBytes: Promise<(ArrayBuffer | null)[]> | null = null;
  let callsReady: Promise<void> | null = null;
  let forestReady: Promise<void> | null = null;
  let forest: AudioBuffer | null = null;
  /** the passes of the forest recording now playing (two, across a seam) */
  const beds = new Set<AudioBufferSourceNode>();
  const calls: AudioBuffer[] = [];
  let lastCall = -1;
  /** the call now sounding: the next one cuts it off */
  let speaking: { src: AudioBufferSourceNode; gain: GainNode } | null = null;
  const frogs: Frog[] = [];

  /** the list of recordings, read once; no list is an empty one */
  function manifest(): Promise<Manifest> {
    return (list ??= fetch(`${base}audio.json`)
      .then((res): Manifest | Promise<Manifest> => (res.ok ? (res.json() as Promise<Manifest>) : {}))
      .catch((): Manifest => ({})));
  }

  async function bytes(file: string): Promise<ArrayBuffer | null> {
    try {
      const res = await fetch(base + file);
      return res.ok ? await res.arrayBuffer() : null;
    } catch {
      return null;
    }
  }

  async function decode(data: ArrayBuffer | null): Promise<AudioBuffer | null> {
    if (!ctx || !data) return null;
    try {
      return await ctx.decodeAudioData(data);
    } catch {
      // not something this browser can play: go without it
      return null;
    }
  }

  /** the calls as files, fetched once: no tap needed, so it can be done ahead */
  function fetchCalls() {
    return (callBytes ??= manifest().then((m) => Promise.all((m.calls ?? []).map(bytes))));
  }

  /** the calls as sound (this needs the context, so a tap first); whatever is missing is simply not used */
  function loadCalls() {
    return (callsReady ??= fetchCalls().then(async (files) => {
      for (const b of await Promise.all(files.map(decode))) if (b) calls.push(b);
    }));
  }

  /** the forest recording, and the made-up chorus handed over to it if the sound is still on */
  function loadForest() {
    return (forestReady ??= manifest().then(async (m) => {
      forest = m.forest?.length ? await decode(await bytes(m.forest[0])) : null;
      if (on) start();
    }));
  }

  function build() {
    ctx = new AudioContext();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    synth = ctx.createGain();
    synth.connect(master);
    voice = ctx.createGain();
    voice.gain.value = 0.72;
    voice.connect(ctx.destination);

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
    beds.add(src);
    src.onended = () => beds.delete(src);
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

  /** one call recording, now */
  function shout() {
    if (!ctx || !voice || calls.length === 0) return false;
    let i = Math.floor(Math.random() * calls.length);
    if (calls.length > 1 && i === lastCall) i = (i + 1) % calls.length;
    lastCall = i;
    const t = ctx.currentTime;
    if (speaking) {
      // one voice: a new call cuts the last one short
      speaking.gain.gain.setTargetAtTime(0, t, 0.015);
      speaking.src.stop(t + 0.1);
    }
    const src = ctx.createBufferSource();
    src.buffer = calls[i];
    // (no two calls quite alike: a hair faster or slower)
    src.playbackRate.value = 0.96 + Math.random() * 0.08;
    const gain = ctx.createGain();
    src.connect(gain).connect(voice);
    src.start();
    const mine = (speaking = { src, gain });
    src.onended = () => {
      if (speaking === mine) speaking = null;
    };
    return true;
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
      if (!on) {
        // the recording stops once it has faded: turned on again, it starts once, not on top of itself
        for (const src of beds) src.stop(t + 0.45);
        beds.clear();
        return on;
      }
      void ctx.resume();
      // the made-up chorus at once; the recordings as soon as they are in (the first time, a moment later)
      start();
      void loadCalls();
      void loadForest();
      return on;
    },
    /** Fetch the call recordings ahead of the first tap (once the page is up), so the first call is not late. */
    warm() {
      void fetchCalls();
    },
    /**
     * The bird calls: one of the call recordings, never the same one twice running.
     * asked: the visitor asked for this call (from a tap), so it is heard whether the sound
     * is on or not. A call the bird makes by itself is heard only with the sound on.
     * Returns whether a recording started now.
     */
    call(asked = false) {
      if (!asked && !on) return false;
      if (!ctx) build();
      if (!ctx) return false;
      void ctx.resume();
      if (calls.length > 0) return shout();
      // the first call: the recordings are not sound yet. Heard when they are, if that is
      // still while the bill is open
      const at = performance.now();
      void loadCalls().then(() => {
        if (performance.now() - at < 700) shout();
      });
      return false;
    },
  };
}
