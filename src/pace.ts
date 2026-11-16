// Holding 60 frames a second, for those who ask for it ("Hold 60 fps" in the settings).
//
// Nearly all of a frame's cost is per pixel (the 4x target, the lens, the felt's shells,
// the feathers' coverage) and next to none of it is the CPU's, so the one dial is how
// many pixels are drawn: the pixel ratio. This watches the frames as they are shown.
// When they come late it draws fewer pixels, a step at a time, until they come on time;
// later it tries a step more, and takes it back if that was too many.
//
// It goes by the frames shown and not by timing the drawing: a timed frame waits on the
// screen's own beat, and a graphics card with little to do slows itself down, so timings
// say more about those than about the room there is.
//
// What it learns is a number of pixels, not a ratio: a bigger window gets a lower ratio,
// and the next visit starts where this one settled.

const SIXTY = 1000 / 60;
const WINDOW = 30; // frames judged together
const EARLY = 12; // frames after which a plainly slow run is acted on
const DOWN = 0.84; // of the pixels, a step (about a twelfth off the ratio)
const DOWN_FAST = 0.7; // when most frames come late
const CLIMB = 8000; // ms on time before the next step more, while steps more are holding
const RETRY = 60000; // ms before trying a step that was too many a moment ago (three times as long each time it still is)
const SETTLE = 20; // frames left out after a resize: making the targets again costs a few of its own
const WARM = 2500; // ms left out once the picture is up: its first frames are late on any machine (uploads, the fade from the drawing)
const KEY = 'iguaca.pixels';

export interface Pace {
  /** the pixel ratio to draw a w × h (CSS px) canvas at */
  ratio(w: number, h: number): number;
  /** each frame, with its time; `on`: the picture is what is being drawn (not the loading drawing) */
  frame(now: number, on: boolean): void;
  /** hold 60 by drawing fewer pixels, or always draw them all (as it starts) */
  hold(on: boolean): void;
  /** frames a second, lately */
  readonly fps: number;
}

export function createPace(opts: {
  /** the most the screen is worth: its own pixel ratio, capped */
  cap: () => number;
  /** never coarser than this */
  floor: number;
  /** the ratio changed: size the picture again */
  onChange: () => void;
}): Pace {
  // device pixels a frame may have; what was learned last time is where this visit starts
  let budget = Infinity;
  // (a budget that was kept was come down to: the step above it was too many then)
  let tryWait = CLIMB;
  try {
    const saved = Number(localStorage.getItem(KEY));
    if (saved > 0) {
      budget = saved;
      tryWait = RETRY;
    }
  } catch {
    /* no storage: start with them all */
  }
  let holding = false;
  // (no picture sized yet: nothing to size again)
  let sized = false;
  const cur = { w: 1, h: 1, r: 1 };
  // ms a frame is to take: a sixtieth of a second, or longer once that is all there is to be had
  let goal = SIXTY;
  let last = -1;
  let skip = 0;
  let wasOn = false;
  let quietUntil = 0;
  // this window's frame times, and how many of them were late
  const dts: number[] = [];
  let long = 0;
  let fps = 0;
  // the last few windows: late for a good part, or with any late frame at all
  const recent: { heavy: boolean; any: boolean }[] = [];
  // on the way down: the budget to go back to if fewer pixels change nothing, the pace to beat, steps since it was beaten
  let descent: { from: number; ref: number; tries: number } | null = null;
  // a step more, on trial: the budget before it, when it has held
  let trial: { back: number; until: number } | null = null;
  let tryAt = tryWait;

  const floor = () => Math.min(opts.floor, opts.cap());
  function ratioFor(w: number, h: number) {
    const cap = opts.cap();
    if (!holding) return cap;
    const r = Math.sqrt(budget / Math.max(w * h, 1));
    if (r >= cap) return cap;
    // (in twentieths: every step is one worth resizing for)
    return Math.max(floor(), Math.floor(r * 20 + 1e-6) / 20);
  }
  function setBudget(b: number) {
    // at the screen's own ratio there is nothing to hold back
    budget = b >= cur.w * cur.h * opts.cap() ** 2 ? Infinity : b;
    try {
      if (budget === Infinity) localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, String(Math.round(budget)));
    } catch {
      /* not kept, then */
    }
    if (ratioFor(cur.w, cur.h) !== cur.r) opts.onChange();
  }
  const pixels = () => cur.w * cur.h * cur.r * cur.r;

  function judge(now: number, mean: number, late: number, frames: number) {
    const heavy = late >= 3 || mean > goal * 1.15;
    const awful = late >= frames * 0.75;
    recent.push({ heavy, any: late > 0 });
    if (recent.length > 8) recent.shift();
    // late for three windows of four, or a late frame every second or so. A hiccup (the machine's,
    // not the picture's) is over in a window or two and costs nothing, unless pixels are already
    // being taken or tried.
    const again = heavy && recent.slice(-4, -1).filter((w) => w.heavy).length >= 2;
    const drip = recent.filter((w) => w.any).length >= 3;
    if (!(drip || (heavy && (again || descent || trial)))) {
      if (heavy) return;
      // on time
      descent = null;
      if (trial && now >= trial.until) {
        // the step more held: the next one can be tried as soon
        trial = null;
        tryWait = CLIMB;
        tryAt = now + tryWait;
      }
      if (!trial && now >= tryAt && cur.r < opts.cap() && recent.length >= 4 && recent.every((w) => !w.any)) {
        trial = { back: budget, until: now + 4500 };
        recent.length = 0;
        setBudget(pixels() / DOWN);
      }
      return;
    }
    recent.length = 0;
    if (trial) {
      // a step too many: back, and slower to try again
      const back = trial.back;
      trial = null;
      tryWait = Math.min(Math.max(tryWait, RETRY) * 3, 900000);
      tryAt = now + tryWait;
      setBudget(back);
      return;
    }
    tryWait = Math.max(tryWait, RETRY);
    tryAt = now + tryWait;
    if (!descent || mean < descent.ref * 0.87) descent = { from: budget, ref: mean, tries: 0 };
    if (descent.tries >= 4 || cur.r <= floor()) {
      // Fewer pixels change nothing, or there are no fewer to draw: whatever holds the frames
      // up (the browser keeping the page to 30, a slow CPU), it is not the pixels. Back to
      // where they last made a difference, and this pace is the one to hold.
      const { from } = descent;
      descent = null;
      goal = Math.max(goal, mean);
      setBudget(from);
      return;
    }
    descent.tries += awful ? 2 : 1;
    setBudget(pixels() * (awful ? DOWN_FAST : DOWN));
  }

  return {
    get fps() {
      return fps;
    },
    ratio(w, h) {
      // (a resize costs a few frames of its own: they are not counted)
      if (w !== cur.w || h !== cur.h || ratioFor(w, h) !== cur.r) {
        skip = SETTLE;
        dts.length = long = 0;
      }
      sized = true;
      cur.w = w;
      cur.h = h;
      cur.r = ratioFor(w, h);
      return cur.r;
    },
    hold(on) {
      if (on === holding) return;
      holding = on;
      descent = trial = null;
      recent.length = 0;
      // (the frames around the switch are no measure: start over, as when the picture comes up)
      wasOn = false;
      dts.length = long = 0;
      if (sized && ratioFor(cur.w, cur.h) !== cur.r) opts.onChange();
    },
    frame(now, on) {
      const dt = last < 0 ? 0 : now - last;
      last = now;
      // a gap is not a slow frame: the tab was away, or something else held the page up
      if (!on || dt <= 0 || dt > 250 || document.hidden) {
        dts.length = long = 0;
        // (and the frames after a gap are no measure either: a moment to pick up again)
        if (on) quietUntil = Math.max(quietUntil, now + 1000);
        wasOn = wasOn && on;
        return;
      }
      if (!wasOn) {
        wasOn = true;
        quietUntil = Math.max(quietUntil, now + WARM);
      }
      if (now < quietUntil) return;
      if (skip > 0) {
        skip--;
        return;
      }
      dts.push(dt);
      if (dt > goal * 1.4) long++;
      const frames = dts.length;
      // (a run with most of its frames late is judged early: no need to sit through the rest)
      if (frames < EARLY || (frames < WINDOW && long < frames * 0.75)) return;
      fps = (1000 * frames) / dts.reduce((a, b) => a + b, 0);
      // the pace: the mean without the slowest tenth, so a stall or two is not a slow run
      dts.sort((a, b) => a - b);
      const kept = frames - Math.ceil(frames * 0.1);
      let mean = 0;
      for (let i = 0; i < kept; i++) mean += dts[i] / kept;
      const late = long;
      dts.length = long = 0;
      // faster than what was settled for: 60 is to be had after all
      if (goal > SIXTY && mean < goal * 0.7) goal = SIXTY;
      if (holding) judge(now, mean, late, frames);
    },
  };
}
