# Iguaca

The Iguaca, the Puerto Rican parrot (*Amazona vittata*), perched in a cloud forest. It is rigged and procedurally alive in three.js, and every feather is real geometry. It looks about, cocks its head, blinks, ruffles, calls, stretches a wing, and takes a palm fruit when you offer one.

![The Iguaca on its perch](public/share.jpg)

This is a remake of [12 Feather](https://github.com/ttillberg/codevember-2026/tree/main/12) from Theo Tillberg's Codevember 2026 (MIT). The rig, the pose solver, the feather shader and the scene are his; that day's bird was a hummingbird. The species, its anatomy, its behaviour and the setting were changed here.

## Try it

- **Click** anywhere to offer a sierra palm fruit. In reach, the bird takes it and chews.
- **Move the pointer** and it may look at it. **Drag** to orbit.
- **Space** startles it. **S** stretches a wing. **R** ruffles. **B** turns it round.
- The round button, bottom right, has the same actions, plus **Call** and **Forest sound** (off until you ask for it; see Sound below).
- **P** pauses, **D** runs a demo, **W** shows the drawing, **H** the head's wireframe.

Address flags: `?gem` shows the original hummingbird in its own scene, `?settings` shows the workbench card on a built page, `?clean` leaves the scene alone. For looking closely: `?pose=front|profile|back|three`, `?quiet`, `?spread=0..1`, `?jaw=0..1`, `?arousal=0..1`.

## Run

```sh
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build      # into dist/, runs from any folder
```

## Sound

The **Forest sound** action turns sound on. Out of the box it is a coquí chorus made in the browser, and the bird calls silently.

To use real recordings, put the files in `public/audio/` and name them in `public/audio/audio.json`:

```json
{
  "forest": ["el-yunque.mp3"],
  "calls": ["call-1.mp3", "call-2.mp3"]
}
```

- `forest`: one background recording, a minute or more. It loops with a cross-fade, so it does not need to be cut to loop.
- `calls`: short parrot calls. One plays each time the bird calls.
- mp3 plays in every browser. Check each recording's licence before using it, and keep any credit it asks for in this file.

## How it is put together

- **The bird as data** (`src/bird/species.ts`): `IGUACA` holds the body's cross-sections, the feather tracts and their looks, the wing, tail and legs, and the tempo of its behaviour. `MOUNTAIN_GEM` is the original hummingbird.
- **Anatomy** (`src/bird/parts.ts`): the hooked bill with its cere and nostrils, the short thick tongue, the two-forward two-back feet, the bare white eye ring, the brown iris and the pupil that pins.
- **Feathers** (`src/bird/plumageGeometry.ts`, `plumageMaterial.ts`): each look can ask for a dark band along the free edge (`edge`) and a closed vane with a clean outline (`closed`). Together they give the scaled look of the head, neck and breast.
- **Behaviour** (`src/bird/motion/*`): layers write a pose and a solver turns it into bones. `behaviour.parrot` switches the call, the chewing, the head cocking, the wing stretch, and switches off the hover flight.
- **Scene** (`src/main.ts`, `src/env/*`, `src/seeds.ts`, `src/sound.ts`): a cloud-forest backdrop with drifting mist, soft overcast light, the palm fruit, and the forest sound.

## Changed from 12 Feather

- A new species, with the anatomy, feather look, behaviour and scene above.
- Bugs fixed along the way: tone mapping "None" no longer breaks the grade shader; a held key does not repeat and Space on a focused button only presses the button; the pixel ratio follows browser zoom and a move to another screen; pointer rays follow the phone tilt; the settings card is hidden from visitors unless asked for.

## Still open

- The perch is the original mossy twig. A palo colorado limb is not modelled yet.
- Preening is switched off: it was written for a long bill and is untested with a short one.
- The bird does not feed from its foot, and it does not fly.
- The share image is a screenshot at screen size, and its `og:image` address needs the site's own address in front once the page is hosted.

## Licence

MIT. Original work © 2026 Theo Tillberg; see `LICENSE`.
