# X-BAT CVA-1 Interactive Design Viewer

Interactive blueprint viewer for the **X-BAT CVA-1 "Deadlight Class"** — a conceptual autonomous VTOL carrier designed around unmanned swarm operations in contested littoral environments.

## Military Context

The CVA-1 is a design study for a next-generation autonomous carrier optimized for the First Island Chain operating environment. Every design decision traces back to a single thesis: **eliminate the manned aviation overhead that defines conventional carrier architecture**.

### Operational Concept

- **No island, no runway, no catapults** — V-BAT/X-BAT tail-sitter VTOL drones lift vertically, eliminating the most complex and failure-prone systems on a traditional carrier
- **45-person crew, zero deck crew** — automated drone handling via two elevators feeding a 3-tier modular hangar; crew focuses on ship operations and human-machine teaming
- **32 sorties/hr sustained** — 4x simultaneous launch + 4x recovery pads with 90-second battery swap turnaround (roughly 3x Nimitz sortie rate)
- **94% RCS reduction vs Nimitz** — tumblehome hull (8deg inward rake), flush-mounted C2 node, flat deck with no vertical signature
- **Onboard swarm autonomy** — Edge compute farm running Hivemind/V-JEPA inference stack; no persistent BLOS comms required
- **DoDD 3000.09 compliance** — CIC staffed by 12 operators exercising legal/ethical oversight of autonomous engagements

### Design Philosophy

The ship operates like an automated fulfillment center for munitions. Drones flow one-way through the hull: forward cells feed launch elevators, recovered drones return via aft elevators into aft cells, cycling through a midship service zone (battery swap, rearm, payload config, compute relay) before re-queuing. No conflicting traffic patterns, no two-way corridors.

## Viewer Features

### Four Interactive Blueprint Views

| View | Description |
|------|-------------|
| **Plan** | Top-down general arrangement — hull outline, 8 VTOL pads (L1-L4 launch, R1-R4 recovery), elevators, C2 node, compute farm, CIWS stations, AESA array |
| **Hangar** | Deck 1 layout — CIC/HMT space, forward/aft drone cell grids (60 cells/tier), elevator shafts, service zone, propulsion |
| **Side** | Cutaway profile — 3-tier hangar structure, internal compartments, waterline, fuel cells, magazine |
| **Midship** | Cross-section at frame 88 — tumblehome geometry, vertical tail-sitter stowage racks, double hull, center elevator |

### Interactivity

- **Click any zone** to open the detail panel with specifications, design rationale, and cross-view navigation
- **Hover zones** for glow highlight effect
- **Drone flow animation** — watch launch/recovery/full-cycle drone paths animated across views (controls in status bar)
- **Keyboard navigation** — Arrow keys or 1-4 to switch views, Escape to close panel

### Design System

"Tactical Documentary" aesthetic — ruggedized military hardware look:
- Olive drab, phosphor green, canvas tan on polymer black
- Thick hardware bezels, chunky toggle buttons
- Film grain + scanline overlay
- Mechanical snap transitions (no bounce, no spring)
- JetBrains Mono throughout

## Ship Specifications

| Spec | Value |
|------|-------|
| Displacement | 28,500 t |
| Length OA | 210 m / 689 ft |
| Beam | 42 m / 138 ft |
| Freeboard | 5 m waterline to deck |
| X-BAT capacity | 120+ airframes (3-tier hangar) |
| Crew | 45 (autonomous ops) |
| Propulsion | IEP + twin waterjet |
| Speed | 30+ knots sustained |
| Endurance | 45 days unrefueled |
| Sortie rate | 32/hr sustained |

## Tech Stack

- **React + Vite + TypeScript**
- **Tailwind CSS v4** — custom tactical color palette via `@theme`
- **Framer Motion** — view transitions, hover glows, drone flow animations
- **Zustand** — cross-view zone highlight coordination
- **Inline SVG** — all blueprint graphics are React components with per-element interactivity

## Development

```bash
cd xbat-viewer
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Source Material

- `XBAT-Text.md` — Design narrative and operational rationale
- `xbat_cva_blueprint.html` — Original plan view SVG
- `xbat_cva_hangar_deck.html` — Original hangar deck SVG
- `xbat_cva_side_elevation.html` — Original side elevation + midship SVG

---

*SHIELD AI x ANP STUDIO // CONCEPT // MARCH 2026*
