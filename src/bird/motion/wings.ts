import type { Pose } from '../pose';
import { rand, smoothstep } from '../util';
import type { Layer, Mind } from './mind';

// Wing re-fold: the folded wings pop off the flanks, jiggle and tuck back,
// one a beat behind the other.
export class WingLayer implements Layer {
  readonly name = 'wings';
  private t0 = -100;
  private nextAt: number;
  private lead = 1;
  private amp = 1;
  // A parrot's stretch: one wing let down and opened slowly behind it, the tail fanned to
  // the same side, held a moment, then folded away. It shows the blue of the primaries.
  // The other stretch: both wings raised over the back and opened wide, the body leaning
  // forward under them. It shows the whole wing, flight feathers and all.
  private stretchT0 = -100;
  private stretchSide: 'L' | 'R' | 'up' = 'L';
  private stretches = 0;
  private nextStretch: number;

  constructor(mind: Mind) {
    const [a, b] = mind.species.behaviour.wingEvery;
    this.nextAt = rand(mind.rng, a * 0.5, b * 0.6);
    this.nextStretch = rand(mind.rng, 20, 45);
  }

  /** seconds a stretch takes */
  static readonly STRETCH = 3.2;

  /** One wing let down (L or R) or both raised (up). Left to itself it takes turns: both up, then one down. */
  stretch(m: Mind, side: 'L' | 'R' | 'up' = this.stretches % 2 === 0 ? 'up' : m.rng() < 0.5 ? 'L' : 'R') {
    this.stretches++;
    this.stretchT0 = m.t;
    this.stretchSide = side;
    this.nextStretch = m.t + rand(m.rng, 45, 110);
  }

  get stretching() {
    return this.stretchT0 > -50;
  }

  shuffle(m: Mind) {
    this.t0 = m.t;
    this.lead = m.rng() < 0.5 ? 1 : -1;
    this.amp = rand(m.rng, 0.7, 1.2);
    const [a, b] = m.species.behaviour.wingEvery;
    this.nextAt = m.t + rand(m.rng, a, b);
  }

  update(m: Mind, p: Pose) {
    if (m.species.behaviour.parrot && !m.quiet && m.t >= this.nextStretch && m.freeze <= 0 && m.arousal < 0.5 && !m.eating && !m.focus) this.stretch(m);
    const s = m.t - this.stretchT0;
    if (s >= 0 && s <= WingLayer.STRETCH) {
      const env = smoothstep(0, 0.9, s) * (1 - smoothstep(WingLayer.STRETCH - 1.0, WingLayer.STRETCH, s));
      if (this.stretchSide === 'up') {
        for (const side of ['L', 'R'] as const) {
          const w = p.wing[side];
          w.spread += env;
          w.raise += env * 1.0;
          w.sweep -= env * 0.18;
        }
        p.bodyPitch += env * 0.14;
        p.tailFan += env * 0.5;
        p.addLift(0.5, 0.3, env * 0.06);
      } else {
        const sg = this.stretchSide === 'L' ? 1 : -1;
        const w = p.wing[this.stretchSide];
        w.spread += env * 0.8;
        w.sweep -= env * 0.5;
        w.raise -= env * 0.35;
        p.tailFan += env * 0.6;
        p.tailYaw += sg * env * 0.25;
        p.bodyRoll -= sg * env * 0.06;
        p.addLift(0.5, 0.3, env * 0.08);
      }
    } else if (s > WingLayer.STRETCH) this.stretchT0 = -100;
    if (!m.quiet && m.t >= this.nextAt && m.freeze <= 0 && !this.stretching) this.shuffle(m);
    const tau = m.t - this.t0;
    if (tau < 0 || tau > 1.2) return;
    for (const side of ['L', 'R'] as const) {
      const x = tau - ((side === 'L' ? 1 : -1) * this.lead > 0 ? 0 : 0.07);
      if (x <= 0) continue;
      const env = smoothstep(0, 0.07, x) * (1 - smoothstep(0.22, 0.6, x));
      const jig = Math.sin(x * 12 * Math.PI * 2) * smoothstep(0.05, 0.1, x) * (1 - smoothstep(0.2, 0.42, x));
      p.wing[side].lift += (env * 0.2 + jig * 0.06) * this.amp;
      p.wing[side].droop += env * 0.1 * this.amp;
    }
    const b = smoothstep(0, 0.08, tau) * (1 - smoothstep(0.15, 0.5, tau));
    p.bodyShift.y += b * 0.006;
    p.addLift(0.5, 0.25, b * 0.12);
  }
}
