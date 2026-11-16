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
  // The other stretch: the bird leans forward, lifts both wings off its back from the
  // shoulders, elbows and wrists still bent, then opens them upward, holds them there
  // trembling a little, and folds them away hand first. It shows the whole wing.
  private stretchT0 = -100;
  private stretchSide: 'L' | 'R' | 'up' = 'L';
  private stretches = 0;
  private nextStretch: number;

  constructor(mind: Mind) {
    const [a, b] = mind.species.behaviour.wingEvery;
    this.nextAt = rand(mind.rng, a * 0.5, b * 0.6);
    this.nextStretch = rand(mind.rng, 20, 45);
  }

  /** seconds a stretch takes: one wing let down, and both raised */
  static readonly STRETCH = 3.2;
  static readonly STRETCH_UP = 4.0;

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
    const T = this.stretchSide === 'up' ? WingLayer.STRETCH_UP : WingLayer.STRETCH;
    if (s >= 0 && s <= T) {
      const env = smoothstep(0, 0.9, s) * (1 - smoothstep(T - 1.0, T, s));
      if (this.stretchSide === 'up') {
        // the lean comes first and goes last; the wings open inside it, and straighten
        // (flex falls) only once they are up
        const open = smoothstep(0.15, 1.7, s) * (1 - smoothstep(T - 1.6, T - 0.15, s));
        const straight = smoothstep(0.9, 1.9, s) * (1 - smoothstep(T - 2.0, T - 1.1, s));
        const held = smoothstep(1.5, 1.9, s) * (1 - smoothstep(T - 2.0, T - 1.6, s));
        const quiver = Math.sin(s * 9 * Math.PI * 2) * 0.022 * held;
        for (const side of ['L', 'R'] as const) {
          const w = p.wing[side];
          w.spread += open;
          w.flex += 0.95 - 0.5 * straight;
          w.raise += 0.58 + 0.22 * straight + quiver * (side === 'L' ? 1 : -0.8);
          w.sweep -= 0.55;
        }
        p.bodyPitch += env * 0.26;
        p.bodyShift.z -= env * 0.035;
        p.bodyShift.y -= env * 0.012;
        p.tailFan += env * 0.5;
        p.addLift(0.5, 0.3, env * 0.07);
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
    } else if (s > T) this.stretchT0 = -100;
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
