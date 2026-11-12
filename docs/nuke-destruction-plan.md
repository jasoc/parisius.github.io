# Nuke sim — destructible world: implementation plan

## Phase 0 findings (2026-11-12, Chrome + AMD Radeon 760M iGPU, Google tiles over Milan, canvas 1728x898)

| # | Check | Result |
|---|-------|--------|
| 1 | Vertex stage on Google tiles | **Works.** `vsOutput.positionMC += mat3(czm_inverseModelView) * dEC` moves the Draco/quantised meshes; 100 m and 3 km sinks both render. |
| 2 | Jitter / swimming (`u_m` path) | **None measurable.** The same sunk point picked from 5 camera poses (300 m to 10 km) spreads 0.05 / 0.76 / 1.9 / 19 m vs. 0.08 / 0.19 / 4.7 / 52 m on undisplaced ground: only depth-buffer and LOD noise. |
| 3 | Cracks between LODs | None seen at the pit rim or walls. Coarse far tiles show long stretched triangles across the rim, as expected. |
| 4 | `pickPosition` | Returns the **displaced** surface (89 m vs. 191 m original). `scene.sampleHeight` returns the **original** surface (192 m), so the CPU mirror must add the offset (`surfaceHeight`). |
| 5 | Culling | **Broken without a fix:** camera inside the pit looking down → floor tiles vanish (35 tiles selected, black sky). `cullWithChildrenBounds = false` has no effect. **Fixed** by stretching each tile's oriented bounding box over the space it can be displaced into (`installCullPad` / `padTile`: wraps the private `Cesium3DTile.prototype.updateVisibility`, uses `TileOrientedBoundingBox.update`). With padding: 86 tiles, floor visible; a 3 km shaft renders with no missing tiles. No max-safe-displacement limit applies while every displacement is declared in `padOf`. Risk: private API, re-check on Cesium upgrades. |
| 6 | Labels on the tileset | Still render (checked at 15 km). |
| 7 | Frame time, 16 slots | 47 fps with no blasts → 30.8 fps with 16 Little Boys (mostly CPU cost of 16 animating mushroom clouds, which already existed) → 29.8 fps with the vertex displacement on: **the vertex stage costs about 1 ms**. |

Not checked: a hilly city or coast (Milan only), a moving-camera visual check for swimming (measured by picking instead), night lighting.

## Phase 1 notes (craters)

- Verified in Chrome on Google tiles: Ivy Mike over Milan leaves a ~910 m bowl (depth ~180 m, rim, ejecta); the camera
  flies inside it (tile collision turns off over sunk ground); a 90 kt ground burst picked on the floor digs its own
  crater into it (origin lifted back by `deformAt`); a giant duck dropped in the bowl rests on the floor; Chicxulub
  shows a ~100 km crater from orbit. Globe fallback still builds the `GroundPrimitive` decal.
- `deformAt` mirrors only the smooth terms: the GLSL noise makes the real surface differ by up to ~±7 % of the depth.
- Ring polylines: for a single blast every ring lies outside the ejecta blanket (`Rfb / crater ≥ 2.9`), so nothing
  needed hiding. Rings of a blast placed inside another crater still drape over the deformed tiles; not checked.
- The camera floor is `surfaceHeight + 15 m` in `applyZoom`. Mouse-drag zoom/orbit does not test it.
- Not checked: a hilly city, a coast, night.

## Phase 2 notes (collapse)

- **World Terrain is not bare earth in cities.** Central Milan: it sits 6-31 m above the Google streets, following the
  blocks. A single calibration offset cannot fix that. Now: morphological opening of the 64x64 grid (~250 m min,
  then max, then light blur), then ONE robust offset = median over 12 clusters of (lowest of 4 Google samples
  within 30 m − terrain). A lower-envelope *plane* was tried first and tilted the ground under Genoa's hills
  (slopes estimated 15-46 m low, hillsides flattened). Genoa residuals still spread ±25 m, so the estimate is
  lifted by `0.75 × IQR` (≤ 12 m): where the data is unreliable only the upper floors fall. Hillsides inside r5
  in Genoa still lose some height: a data limit, not fixable with tens of samples.
- **`scene.sampleHeight` costs ~10 ms per call** and hit clouds/billboards (8 km "ground"); `objectsToExclude`
  does not work for billboards (the pick reports the billboard, not the collection). `sampleH` hides every
  non-tile primitive around each sampling batch. This also fixed chain-reaction / cruise target heights.
- Heightmaps take 2-4 s, longer than the shock needs to cross a small bomb's r5. They are **prepared ahead**:
  armed cursor resting 350 ms, missile/space launch, chain-reaction sites; calibration is shared within ~5 km
  (16 Little Boys: all heightmaps in 4.8 s). If one still lands late, collapse catches up in ~1.5 s.
- Per-"block" variation uses smooth 35 m value noise, not a hard hash: a building split between two hash cells
  dragged one half down into a stretched curtain.
- Verified (Chrome, Google tiles): Little Boy over central Milan flattens the 20 psi disc behind the ring, the
  5 psi band mixes rubble and standing blocks with broken tops, streets keep their shape, no flicker or missing
  tiles orbiting at 4 headings. Night: unchanged (very dark by design).
- Frame time, 16 Little Boys, 1728x898, Radeon 760M: 23.5 fps with clouds animating; 38 fps with cloud updates
  off; 41 fps with the custom shader also off → the whole tile shader costs ~3.6 ms. The rest is the
  pre-existing CPU cloud simulation (+12 % from the new rubble dust puffs), which stops when the clouds settle.
- Not checked: a coast; leaning (the shear exists, too subtle to see at 1 km); the globe fallback for collapse
  (by design none).

## Phase 3 notes (cracks)

- **Google tiles are unlit and the unlit path ignores `material.emissive`.** Every glow (crater floor since
  Phase 1, shock ring, cracks) is now added to `diffuse`. The Phase 1 crater-floor glow had never shown.
- The crack web does not use a world-space frame (`mod(czm_model[3], P)`): czm_model is float32, ~0.5 m off,
  which shows as seams at tile borders with 8 m cells. It uses the precise local frame of the strongest blast at
  that pixel (seams only where two blasts' crack fields are equally strong).
- Walls are excluded with a screen-space normal (`cross(dFdx, dFdy)` of positionEC, tiles have no normals) and the
  collapse varyings. Derivatives are taken at the top of `fragmentMain`, in uniform control flow.
- Major fissures keep ≥ ~1 px width (dimmed by coverage) so they read from 50 km; the web fades below a pixel.
- Collapse fades out 12-25 km from the camera: squashing coarse LOD tiles opened rectangular seams against finer
  neighbours (seen at 50 km).
- Heat is real-time (`exp(-real/20)`, sim time runs up to 12x faster): verified Castle Bravo over Milan, glowing
  at 8 s, faint at 35 s, black cracks at 65 s; reads at 500 m (wide fissures + web across the rubble) and 50 km
  (radial + concentric fissure pattern).

## Phase 4 notes (persistence)

- No eviction: every blast stays as a scar until `clear()`. Only the newest 16 keep clouds (faded out over 8 s,
  then freed), rings and the globe decal; the scar keeps crater, collapse, cracks and its heightmap.
- Slots are scheduled every frame by view relevance (distance from the look-at point relative to r1), animating
  blasts strongly preferred, scars under 2 px dropped. "Animating first" alone did not work: a Tsar animates
  for ~13 real minutes (sim time drops back to real time after 1.3 Trise), so 40 of them starved every old
  crater. Hysteresis must subtract (scores go negative); a multiplicative one made slots flap every frame and
  invalidated all tile padding 175 times a second (13 fps).
- Global map 2048x1024 RGBA8, sampled with a 4-tap cubic B-spline (a Tsar's scorch is ~1 texel: bilinear drew
  squares). Map scorch/crater are weighted by (1 - slot coverage) to avoid double counting.
- Subsidence noise uses 30 / 60 km wavelengths: a 9 km octave opened straight seams where coarse and fine LOD
  tiles meet with few shared vertices.
- Verified (Chrome, Google tiles): 40 Tsars (25 in a cluster around Munich, 15 spread) + 3 Ivy Mikes: scars
  visible from orbit; the cluster (stress up to 16) sinks ~3.7 km with a glowing magma crust and hot fissures;
  zooming into the oldest crater (Paris Ivy Mike) while 40 blasts still animate shows its bowl, glass floor and
  cracks (it gets slot 6). Frame time with 40 Tsars: orbit 35 fps (39 without blasts), Munich 33 fps (45).
- Heightmap prep for 40 sites takes ~90 s at orbit: `sampleHeight` costs ~31 ms there (one per frame), so frames
  hitch while it drains. Paris calibration residuals spread -91..+186 m (samples from tiles not loaded at that
  altitude), so the margin hit its 12 m cap.
- Not done: the optional camera-following regional map; the antimeridian splat wraps but was not tested.

Goal: when a bomb goes off, the world is physically changed. Real craters, buildings that collapse as
the shock front passes, ground cracks, flying debris, and cumulative damage that lets Tsar-spam sink
and crack a whole continent. Everything persists until `clear()`.

## 0. Context you must know first

- Code: `src/app/nuke/engine.ts` (1582 lines, `// @ts-nocheck`, imperative CesiumJS), `tools.ts`
  (weapons), `nuke.ts` / `nuke.html` (Angular UI). Route `/nuke-sim`. Run with `npm ci && npm start`
  (http://localhost:4200).
- Engine is **CesiumJS 1.146 from CDN** (`cesium-loader.ts`), global `Cesium`. No three.js, no bundled
  deps. Do not add a physics engine or port to three.js.
- World = **Google Photorealistic 3D Tiles** (`loadGoogle`, engine.ts:240). It is one fused
  photogrammetry skin: no per-building objects, no feature IDs, no normals. Buildings can only be
  told apart from terrain by *height above a bare-earth estimate*.
- If Google tiles fail (429 on the shared ion token) the app falls back to `scene.globe` with Esri
  imagery. **All new features target the tileset only**; the globe fallback keeps today's behaviour.
- Existing damage rendering:
  - `setupShader` (engine.ts:261): one `Cesium.CustomShader` on the tileset, **fragment stage only**,
    16 blast slots (`this.MAX`), per slot `u_c` (centre, world), `u_n` (up), `u_a` = (shock radius,
    r20, r5, r1), `u_b` = (rth, burn, glowB, glow radius). Written every frame by `setSlot`
    (engine.ts:753) from `updateBlast` (engine.ts:951).
  - `detonate` (engine.ts:778): per blast a `GroundPrimitive` decal (scorch, painted crater, shock
    ring, glow) + clamped polyline rings. The 17th blast evicts the oldest (engine.ts:782).
  - Physics radii come from `effects()` (engine.ts:39): `r20`, `r5`, `r1`, `rth`, `Rfb`, `crater`
    (radius in m, 0 for air bursts), `tmax`, `Trise`, `tglow`, `hob`.
- Render loop is on demand (`requestRenderMode`); `needsFrames()` (engine.ts:226) decides when to
  keep rendering. Anything animated must be reflected there.
- Verified against the Cesium CustomShader guide:
  - `vertexShaderText` with `void vertexMain(VertexInput vsInput, inout czm_modelVertexOutput vsOutput)`;
    write `vsOutput.positionMC` to move vertices. Only `positionMC` exists in the vertex stage
    (`positionWC` / `positionEC` are fragment-only).
  - `varyings: { v_x: Cesium.VaryingType.VEC3 }` (FLOAT, VEC2-4, MAT2-4).
  - Uniform types include `MAT4` and `SAMPLER_2D`; textures via
    `new Cesium.TextureUniform({ typedArray, width, height, pixelFormat, pixelDatatype, repeat,
    minificationFilter, magnificationFilter })`, replaced with `setUniform`.
  - Moving vertices does **not** update bounding volumes: tiles can be culled wrongly.

## 1. Core design (applies to every phase)

One analytic **deformation field**, evaluated from the *original* vertex position, implemented twice:
in GLSL (vertex stage) and mirrored in JS (`deformAt`) for everything that runs on the CPU.

**Precise blast-local coordinates.** World coords in float32 are only good to ~0.5 m. Per slot, pass
`u_m{i}` (MAT4) = `inverse(enu) * inverseView`, computed in doubles in JS every frame. Then
`local = (u_m * vec4(positionEC, 1)).xyz` is blast-local ENU in metres (x east, y north, z up) with
mm precision near the blast. In the vertex stage `positionEC = (czm_modelView * vec4(positionMC,1)).xyz`;
in the fragment stage it is `fsInput.attributes.positionEC`. This replaces `u_c` / `u_n`.

- A local vector `v` goes back to model space as
  `mat3(czm_inverseModelView) * (transpose(mat3(u_m)) * v)`.
- Height above the blast's ground level, curvature-corrected:
  `h = local.z + dot(local.xy, local.xy) / (2.0 * 6371000.0)`; ground distance `d = length(local.xy)`.
  For `d > 300 km` displace along `normalize(positionEC - czm_view[3].xyz)` (toward Earth's centre)
  instead of local up.

**Per-slot uniforms** (16 slots, ~7 vec4 each, within WebGL2 minimums): `u_m` (mat4), `u_a`, `u_b`
(as today), new `u_d` = (crater radius, crater progress `crv`, crack heat, random seed), new `u_e` =
(heightmap atlas index, heightmap half-extent, collapse progress override, hob).

**Composition rules.** All blasts displace from the original position; vertical offsets are summed
and clamped (max depth ~60 km). Collapse uses the max weight over slots. A blast detonated on
already-deformed ground must store an *un-deformed* `groundPos` (subtract `deformAt` at that point),
because `pickWorld` reads the displaced depth buffer.

**CPU mirror.** Add `surfaceHeight(carto)` as the single choke point replacing raw
`scene.sampleHeight` (engine.ts:986, 1056-1057, callers at 1198, 1287, plus ducks, turrets, UFOs,
silo, flyers' impact points): `sampleHeight` + crater/subsidence offset, and inside a collapsed zone
the bare-earth estimate instead of the roof. Mirror only smooth terms; do not try to reproduce GLSL
hashes on the CPU.

**Camera.** `ts.enableCollision` and `applyZoom`'s `height < 15` test (engine.ts:492) use original
geometry / ellipsoid height. Replace with our own floor: `surfaceHeight + 15 m`; turn tileset
collision off while the camera is above any area with offset below about -10 m.

**Dev hook.** Add a `?debug` query flag exposing `window.__nuke = engine` so detonations and camera
moves can be scripted from the browser console during verification. Not in production builds.

## 2. Phase 0 — spike (do this before anything else, keep it throwaway-small)

Add a vertex stage that sinks everything within 500 m of slot 0 by 100 m. Confirm, in a city and from
orbit:

1. It works at all on Google tiles (Draco / quantised positions).
2. No jitter or swimming while the camera moves (validates the `u_m` path).
3. No cracks between tiles of different LOD.
4. `scene.pickPosition` returns the displaced surface.
5. Culling: tilt and pan with the dent at the screen edge and near the camera; note any popping.
   If tiles vanish, try `tileset.cullWithChildrenBounds = false`, then per-tile bounding-volume
   padding, and record the max safe displacement.
6. Label imagery draped on the tileset (`setLabels`) still renders.
7. Frame time with 16 active slots on an integrated GPU.

Write the findings at the top of this file. If 1 or 2 fail, stop and report.

## 3. Phase 1 — real craters

- Vertex: crater profile vs `r = d / craterR`, scaled by `crv` (already animated, engine.ts:966):
  bowl `-depth * (1 - r²)` for `r < 1`; rim uplift `+0.08 * depth * exp(-((r-1)/0.3)²)`; ejecta
  blanket fading to 0 at `r = 2.5`. `depth = min(0.4 * craterR, 30 km)`; for `craterR > 5 km` flatten
  the floor and add a central peak. Low-frequency noise (blast-local) on rim and floor.
- Air bursts with `hob < Rfb`: shallow compression dish (few metres) inside `Rfb`; otherwise none.
- Fragment: port the decal's scorch / crater / rim / shock ring / glow (engine.ts:798-814) into the
  tile shader using `local`. Reason: the `GroundPrimitive` classification volume will not reach the
  bottom of deep craters. Keep the `GroundPrimitive` only when `this.tileset` is null (globe fallback).
- Crater interior: vitrified dark glass, emissive while `crack heat` is high.
- Check the clamped ring polylines near deep craters; hide ring segments that break.
- Wire `deformAt`, `surfaceHeight`, the camera floor and un-deformed `groundPos`.

Done when: Ivy Mike in a city leaves a ~900 m bowl you can fly into; a second bomb can be dropped on
its floor; a giant duck dropped in it rests on the floor; Chicxulub shows a crater from orbit.

## 4. Phase 2 — buildings collapse

**Bare-earth estimate per blast** (the hard part):

- Source: Cesium World Terrain. Create the provider once (`Cesium.createWorldTerrainAsync()`), then
  per blast `Cesium.sampleTerrain(provider, level, grid)` for a 64x64 grid over half-extent
  `S = clamp(1.1 * r5, 300 m, 30 km)`; pick `level` so tile vertex spacing ≈ grid spacing (max ~13).
  It is async: the request starts at detonation and usually lands before the shock front reaches
  buildings. Never block the blast on it.
- Calibrate to the Google mesh: `offset` = 10th percentile of `sampleHeight - dtm` over ~32 jittered
  points near the centre that return a value. Store heights relative to the blast ground level.
- Fallbacks, in order: least-squares plane through low `sampleHeight` samples; then the flat
  blast-level plane. Collapse must still work with the fallback.
- Storage: one atlas for the 16 slots, 4x4 tiles of 64x64, `RGBA` + `FLOAT`, NEAREST sampler,
  manual bilinear with `texelFetch` (linear float filtering is not guaranteed). If float upload fails,
  pack 16-bit heights into RGBA8. Keep each blast's `Float32Array` in JS for `surfaceHeight`.
  If megaton-scale results erode hills, add a nested inner tile (`S ≤ 2 km`) per blast.

**Vertex stage:**

- `above = max(0, h - ground - 2.0)`. Treat `above > ~400 m` as terrain (fade collapse out).
- Severity `s(d)`: 1 inside `r20`, falling to 0 at `r5`; vaporised (keep = 0, no rubble) inside
  `0.6 * Rfb` for low bursts.
- Per-"block" variation: hash of `floor(local.xy / 35 m)` so in the 5 psi band some blocks pancake,
  some stand at 60-100 % and **lean away from the blast** (horizontal shear ∝ `above * s`).
- Result: `newAbove = above * keep + rubbleNoise(local.xy) * (1 - keep) * min(0.15 * above, 4 m)`,
  `keep` ≈ 0.06-0.18 for collapsed blocks.
- Timing: progress = `smoothstep(0, L, shock - d - blockDelay)` with `shock = u_a.x`, so buildings
  fall as the front passes. `D.shock` already grows past `r5`.
- Varyings to the fragment stage: collapse amount, original `above`.

**Fragment stage:** where collapsed, blend the stretched photo texture toward procedural rubble
(grey-brown value noise, darker in the fire zone); soot on standing walls inside `rth`.

**Extras:** dust wall on the front and a lingering haze over the rubble using the existing puff
types in `makePuffs` / `cloudItems` (engine.ts:766, 876).

Done when: Little Boy over a dense downtown flattens the 20 psi disc progressively behind the shock
ring, the 5 psi band is a mix of rubble and leaning blocks, streets and a nearby hill keep their
shape, and nothing flickers while orbiting the camera.

## 5. Phase 3 — ground cracks

- Fragment only at first. Two layers:
  1. **Web**: one Voronoi-edge (F2 - F1) evaluation per pixel in a global, tile-continuous frame.
     Build it in the vertex stage as `mod(czm_model[3].xyz, P) + mat3(czm_model) * positionMC`
     (P = 4096 m, lattice sizes dividing P so it tiles), pass as a varying. Two octaves
     (~60 m and ~8 m cells). Verify continuity across tile borders.
  2. **Radial / concentric modulators** per slot from `local` polar coords (angular sectors hashed
     by `u_d.w`, rings at multiples of `craterR`), domain-warped by the web noise. Cheap, so it can
     stay in the 16-slot loop.
- Intensity: strongest from the crater rim to ~`r20`, gone by `r5`; ground bursts ≫ air bursts.
- Look: dark core with a fake-depth inner shadow; emissive orange while hot. New per-blast
  `crack heat = exp(-t / (8 * tglow))` in `u_d.z`; keep rendering until it is ~0 (`needsFrames`).
- Never draw cracks on standing walls (use the collapse varying / `above`).
- Real fissure geometry is Phase 4 (needs width ≥ vertex spacing).

Done when: Castle Bravo leaves a glowing crack network that cools to black over about a minute and
reads correctly from 500 m and from 50 km.

## 6. Phase 4 — persistence and cumulative damage

**Unbounded scars.** Remove the eviction at engine.ts:782. Split a blast into its *animation* (puffs,
rings, decal: freed when done, rings capped to the newest 16 as today) and a lightweight permanent
**scar** `{ groundPos, enu, E, seed, heightmap }`.

**Slot scheduling.** Each frame assign the 16 shader slots to: blasts still animating first, then the
scars most relevant to the view (score by distance from the camera look-at point minus `r1`, with
hysteresis). A scar may leave the slots only when it is under ~2 px on screen or fully represented by
the global map. Rebuild the heightmap atlas only when the slot set changes.

**Global damage map.** Equirectangular `RGBA8`, 2048x1024 (~20 km per texel), one `SAMPLER_2D`
sampled in both stages from lon/lat of the world position. Channels: R scorch, G cumulative
**stress**, B crater depth (log-encoded), A spare.

- CPU splat on each detonation (footprint widened by `1/cos(lat)`, wrapped at the antimeridian,
  area-weighted for sub-texel blasts), re-upload throttled to ≤ 4 per second via a dirty flag.
- Stress: each blast adds ~1 inside `r20`, falling to 0 at `r1`.
- Thresholds (tune): > 2 cracks appear; > 4 cracks widen and glow; > 6 the ground **subsides**,
  depth growing with stress to several km, modulated by low-frequency ridged noise that carves real
  fissures (vertex displacement at ≥ 20 km wavelength); deepest areas show an emissive magma floor.
- Blend: slots give exact detail nearby; the map carries everything else. Avoid double counting a
  scar that is both in a slot and in the map (subtract its own splat or weight by slot coverage).
- Optional stretch: a camera-following regional map (1024², ~500 m per texel) regenerated from the
  scar list, to keep city-scale scorch beyond 16 slots.

`clear()` (engine.ts:568) must wipe scars, atlas and the global map. `deformAt` must include
subsidence.

Done when: 40+ Tsar Bombas spread over Europe remain visible as scars from orbit, the overlap region
is cracked and sunk with glowing fissures, zooming into any old crater still shows correct geometry,
and frame time stays stable.

## 7. Phase 5 — fake debris

- No physics engine. Extend `spawn` / `updateParticles` (engine.ts:993-1008) with gravity, spin, one
  bounce against `surfaceHeight`, then rest and fade; a small dust puff on impact.
- New "chunk" billboard texture (irregular dark polygon) in its own `BillboardCollection`, following
  the one-collection-per-texture rule (engine.ts:201).
- Spawn as the shock front crosses the collapse zone: chunks thrown outward and up from points where
  `sampleHeight - ground > 6 m`, sizes 3-15 m (exaggerated, like `smallBoom`).
- Budget: ≤ 600 live chunks globally; spawn only if the camera is within ~`3 * r5` and a chunk would
  be ≥ 1 px. Add to `needsFrames()`.
- Out of scope unless trivial: craters and collapse for the conventional weapons that use
  `smallBoom` (cruise, carpet, railgun). They would exhaust the slots.

## 8. Order, constraints, verification

- Order: Phase 0 → 1 → 2 → 3 → 4 → 5. Each phase must leave the sim shippable; one commit per phase.
- Keep the existing style: `engine.ts` stays `@ts-nocheck` imperative code, dense lines, short
  comments explaining *why*. No new npm dependencies. Do not change weapon physics in `effects()`.
- Do not regress: globe fallback, ring toggle (`setRings`), labels, chain reactions, day/night tint
  (the tint block at the top of `fragmentMain` must still run first), saved places, thumbnails.
- Performance target: no visible frame drop with 16 active slots at 1080p on an integrated GPU.
  Branch out of per-slot work early when the fragment/vertex is outside that blast's `r1`.
- Verify every phase in the browser on the real Google tiles (flat downtown, hilly city, coast,
  orbit), in day and night, and report anything not checked. If Google tiles return 429, say so
  instead of validating on the globe fallback.
- Known risks to report early: tile culling with large displacement; DTM vs Google vertical offset;
  float-texture support; clamped rings over deformed ground; ion quota (World Terrain adds requests).
