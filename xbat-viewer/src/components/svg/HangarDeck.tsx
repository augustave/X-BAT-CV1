import { GlowFilters } from './shared/GlowFilter';
import { BlueprintGrid } from './shared/BlueprintGrid';
import { InteractiveZone } from './shared/InteractiveZone';
import { DroneFlowOverlay } from '../animations/DroneFlowOverlay';

function DroneCellColumn({ x, startY, count, step, color, opacity }: {
  x: number; startY: number; count: number; step: number; color: string; opacity: number;
}) {
  return (
    <g fill={color} opacity={opacity}>
      {Array.from({ length: count }, (_, i) => (
        <rect key={i} x={x} y={startY + i * step} width={12} height={7} rx={1} />
      ))}
    </g>
  );
}

export function HangarDeck() {
  const fwdColumns = [
    { x: 235, topY: 215, topCount: 5, botY: 290, botCount: 5, opacity: 0.25 },
    { x: 250, topY: 212, topCount: 6, botY: 292, botCount: 6, opacity: 0.3 },
    { x: 265, topY: 210, topCount: 6, botY: 294, botCount: 6, opacity: 0.3 },
    { x: 280, topY: 208, topCount: 6, botY: 296, botCount: 6, opacity: 0.35 },
    { x: 295, topY: 206, topCount: 7, botY: 298, botCount: 7, opacity: 0.35 },
    { x: 310, topY: 204, topCount: 7, botY: 300, botCount: 7, opacity: 0.4 },
    { x: 325, topY: 202, topCount: 7, botY: 302, botCount: 7, opacity: 0.4 },
    { x: 340, topY: 200, topCount: 7, botY: 304, botCount: 7, opacity: 0.45 },
    { x: 355, topY: 198, topCount: 7, botY: 306, botCount: 7, opacity: 0.45 },
    { x: 370, topY: 196, topCount: 8, botY: 308, botCount: 8, opacity: 0.5 },
  ];

  const aftColumns = [
    { x: 545, topY: 204, topCount: 6, botY: 300, botCount: 6, opacity: 0.3 },
    { x: 560, topY: 202, topCount: 6, botY: 302, botCount: 6, opacity: 0.35 },
    { x: 575, topY: 200, topCount: 7, botY: 304, botCount: 7, opacity: 0.35 },
    { x: 590, topY: 198, topCount: 7, botY: 306, botCount: 7, opacity: 0.4 },
    { x: 605, topY: 200, topCount: 7, botY: 304, botCount: 7, opacity: 0.4 },
    { x: 620, topY: 202, topCount: 6, botY: 302, botCount: 6, opacity: 0.45 },
    { x: 635, topY: 204, topCount: 6, botY: 304, botCount: 6, opacity: 0.45 },
    { x: 650, topY: 208, topCount: 5, botY: 308, botCount: 5, opacity: 0.5 },
  ];

  return (
    <svg width="100%" height="100%" viewBox="0 0 960 540" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <GlowFilters />
      <rect width="960" height="540" fill="#141516" />
      <BlueprintGrid width={960} height={540} />

      <text x="16" y="24" fontFamily="var(--font-mono),monospace" fontSize="8" fill="#4a4f44" letterSpacing=".08em">HANGAR DECK 1 — PLAN VIEW // X-BAT CVA-1</text>

      {/* Hull outline — horizontal, bow LEFT, stern RIGHT */}
      <path
        d="M90 260 L130 218 L200 193 L350 180 L600 175 L750 178 L820 185 L850 200 L860 260 L850 320 L820 335 L750 342 L600 345 L350 340 L200 327 L130 302 Z"
        fill="#1a1b1c"
        stroke="#5e664d"
        strokeWidth="1"
      />

      <defs>
        <clipPath id="hull">
          <path d="M90 260 L130 218 L200 193 L350 180 L600 175 L750 178 L820 185 L850 200 L860 260 L850 320 L820 335 L750 342 L600 345 L350 340 L200 327 L130 302 Z" />
        </clipPath>
      </defs>

      {/* Centerline — horizontal */}
      <line x1="120" y1="260" x2="845" y2="260" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="6 3" />

      {/* Compartment dividers */}
      <g stroke="#3a3b36" strokeWidth="0.5">
        <line x1="220" y1="200" x2="220" y2="320" />
        <line x1="400" y1="180" x2="400" y2="340" />
        <line x1="520" y1="178" x2="520" y2="342" />
        <line x1="680" y1="182" x2="680" y2="338" />
        <line x1="400" y1="180" x2="520" y2="178" />
        <line x1="400" y1="340" x2="520" y2="342" />
      </g>

      {/* CIC — bow / left area */}
      <InteractiveZone zoneId="cic" color="cic">
        <rect x="130" y="225" width="80" height="70" rx="3" fill="#1a1b1c" stroke="#b89a7a" strokeWidth="0.5" />
        <text x="170" y="252" fontFamily="var(--font-mono),monospace" fontSize="7.5" fill="#b89a7a" textAnchor="middle" opacity="0.8">HUMAN-MACHINE</text>
        <text x="170" y="264" fontFamily="var(--font-mono),monospace" fontSize="7.5" fill="#b89a7a" textAnchor="middle" opacity="0.8">TEAMING / CIC</text>
        <text x="170" y="278" fontFamily="var(--font-mono),monospace" fontSize="6" fill="#6b7264" textAnchor="middle">DoDD 3000.09 OVERSIGHT</text>
      </InteractiveZone>

      {/* Forward drone cells — launch */}
      <InteractiveZone zoneId="hangar-fwd" color="launch">
        <g clipPath="url(#hull)">
          {fwdColumns.map((col, i) => (
            <g key={i}>
              <DroneCellColumn x={col.x} startY={col.topY} count={col.topCount} step={9} color="#8FA388" opacity={col.opacity} />
              <DroneCellColumn x={col.x} startY={col.botY} count={col.botCount} step={9} color="#8FA388" opacity={col.opacity} />
            </g>
          ))}
        </g>
      </InteractiveZone>

      {/* Aft drone cells — recovery */}
      <InteractiveZone zoneId="hangar-aft" color="recovery">
        <g clipPath="url(#hull)">
          {aftColumns.map((col, i) => (
            <g key={i}>
              <DroneCellColumn x={col.x} startY={col.topY} count={col.topCount} step={9} color="#9C8062" opacity={col.opacity} />
              <DroneCellColumn x={col.x} startY={col.botY} count={col.botCount} step={9} color="#9C8062" opacity={col.opacity} />
            </g>
          ))}
        </g>
      </InteractiveZone>

      {/* Elevators — vertical rectangles spanning ship width */}
      <InteractiveZone zoneId="elevator-fwd" color="stroke">
        <rect x="405" y="215" width="35" height="90" rx="3" fill="#1a1b1c" stroke="#8FA388" strokeWidth="0.5" strokeDasharray="4 2" />
        <text x="422" y="264" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#8FA388" textAnchor="middle" opacity="0.6">ELEV-1</text>
      </InteractiveZone>

      <InteractiveZone zoneId="elevator-aft" color="stroke">
        <rect x="485" y="213" width="35" height="94" rx="3" fill="#1a1b1c" stroke="#8FA388" strokeWidth="0.5" strokeDasharray="4 2" />
        <text x="502" y="264" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#8FA388" textAnchor="middle" opacity="0.6">ELEV-2</text>
      </InteractiveZone>

      {/* Flow arrows — launch pointing left (out of bow), recovery pointing right (into stern) */}
      <g stroke="#8FA388" strokeWidth="0.4" fill="none" opacity="0.5">
        <line x1="400" y1="248" x2="225" y2="248" markerEnd="url(#arrow)" />
        <line x1="400" y1="272" x2="225" y2="272" markerEnd="url(#arrow)" />
      </g>
      <g stroke="#9C8062" strokeWidth="0.4" fill="none" opacity="0.5">
        <line x1="520" y1="248" x2="675" y2="248" markerEnd="url(#arrow)" />
        <line x1="520" y1="272" x2="675" y2="272" markerEnd="url(#arrow)" />
      </g>

      {/* Cycle paths within hull */}
      <g stroke="#8FA388" strokeWidth="0.3" fill="none" opacity="0.3">
        <path d="M310 215 L310 248 L400 248" />
        <path d="M310 305 L310 272 L400 272" />
        <path d="M610 215 L610 248 L520 248" />
        <path d="M610 305 L610 272 L520 272" />
      </g>

      {/* Service zone — between elevators */}
      <InteractiveZone zoneId="service-zone" color="launch">
        <rect x="445" y="218" width="35" height="25" rx="2" fill="#1a1b1c" stroke="#8FA388" strokeWidth="0.4" />
        <text x="462" y="234" fontFamily="var(--font-mono),monospace" fontSize="5" fill="#8FA388" textAnchor="middle" opacity="0.7">BATT</text>

        <rect x="445" y="247" width="35" height="25" rx="2" fill="#1a1b1c" stroke="#9C8062" strokeWidth="0.4" />
        <text x="462" y="263" fontFamily="var(--font-mono),monospace" fontSize="5" fill="#9C8062" textAnchor="middle" opacity="0.7">REARM</text>

        <rect x="445" y="276" width="35" height="25" rx="2" fill="#1a1b1c" stroke="#9C8062" strokeWidth="0.4" />
        <text x="462" y="292" fontFamily="var(--font-mono),monospace" fontSize="5" fill="#9C8062" textAnchor="middle" opacity="0.7">PAYLOAD</text>
      </InteractiveZone>

      {/* Compute node */}
      <InteractiveZone zoneId="compute-farm" color="compute">
        <rect x="445" y="305" width="35" height="20" rx="2" fill="#1a1b1c" stroke="#7a8a70" strokeWidth="0.4" />
        <g fill="#7a8a70" opacity="0.3">
          {[449, 454, 459, 464, 469].map(x => [309, 314, 319].map(y => (
            <rect key={`${x}-${y}`} x={x} y={y} width={3} height={3} rx="0.5" />
          )))}
        </g>
        <text x="472" y="318" fontFamily="var(--font-mono),monospace" fontSize="5" fill="#7a8a70" opacity="0.6">COMPUTE</text>
      </InteractiveZone>

      {/* Propulsion — stern / right area */}
      <InteractiveZone zoneId="propulsion" color="stroke">
        <rect x="690" y="218" width="140" height="84" rx="3" fill="none" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="4 2" />
        <text x="760" y="258" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#6b7264" textAnchor="middle">PROPULSION</text>
        <text x="760" y="271" fontFamily="var(--font-mono),monospace" fontSize="6" fill="#4a4f44" textAnchor="middle">RESTRICTED</text>
      </InteractiveZone>

      {/* Cell labels */}
      <g fontFamily="var(--font-mono),monospace" fontSize="7.5">
        <text x="310" y="228" textAnchor="middle" fill="#8FA388" opacity="0.5">FWD CELLS</text>
        <text x="310" y="240" textAnchor="middle" fill="#8FA388" opacity="0.3">(LAUNCH)</text>
        <text x="310" y="290" textAnchor="middle" fill="#8FA388" opacity="0.5">FWD CELLS</text>
        <text x="310" y="302" textAnchor="middle" fill="#8FA388" opacity="0.3">(LAUNCH)</text>
        <text x="610" y="228" textAnchor="middle" fill="#9C8062" opacity="0.5">AFT CELLS</text>
        <text x="610" y="240" textAnchor="middle" fill="#9C8062" opacity="0.3">(RECOVERY)</text>
        <text x="610" y="290" textAnchor="middle" fill="#9C8062" opacity="0.5">AFT CELLS</text>
        <text x="610" y="302" textAnchor="middle" fill="#9C8062" opacity="0.3">(RECOVERY)</text>
      </g>

      {/* Annotations — above the ship */}
      <g fontFamily="var(--font-mono),monospace" fill="#8FA388" fontSize="8.5" letterSpacing=".06em">
        <circle cx="170" cy="250" r="1.5" fill="#b89a7a" opacity="0.5" />
        <line x1="170" y1="225" x2="170" y2="155" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="170" y="148" fontSize="8.5" fill="#b89a7a" textAnchor="middle">CIC / HMT SPACE</text>
        <text x="170" y="138" fontSize="7" fill="#6b7264" textAnchor="middle">12 operators + legal review</text>
        <text x="170" y="128" fontSize="7" fill="#6b7264" textAnchor="middle">DoDD 3000.09 compliance</text>

        <circle cx="310" cy="200" r="1.5" fill="#8FA388" opacity="0.5" />
        <line x1="310" y1="193" x2="310" y2="130" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="310" y="123" fontSize="8.5" fill="#8FA388" textAnchor="middle">FWD STOWAGE — 60 CELLS</text>
        <text x="310" y="113" fontSize="7" fill="#6b7264" textAnchor="middle">Vertical tail-sitter racks</text>
        <text x="310" y="103" fontSize="7" fill="#6b7264" textAnchor="middle">1.2m x 0.8m footprint each</text>

        <circle cx="422" cy="215" r="1.5" fill="#8FA388" opacity="0.5" />
        <line x1="422" y1="210" x2="460" y2="130" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="460" y="123" fontSize="8.5" fill="#8FA388" textAnchor="middle">FWD ELEVATOR</text>
        <text x="460" y="113" fontSize="7" fill="#6b7264" textAnchor="middle">Launch priority — 40 / hr</text>

        <circle cx="462" cy="234" r="1.5" fill="#8FA388" opacity="0.5" />
        <line x1="462" y1="218" x2="580" y2="130" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="580" y="123" fontSize="8.5" fill="#8FA388" textAnchor="middle">BATTERY SWAP</text>
        <text x="580" y="113" fontSize="7" fill="#6b7264" textAnchor="middle">Auto hot-swap — 90s cycle</text>
      </g>

      {/* Annotations — below the ship */}
      <g fontFamily="var(--font-mono),monospace" fill="#8FA388" fontSize="8.5" letterSpacing=".06em">
        <circle cx="462" cy="292" r="1.5" fill="#9C8062" opacity="0.5" />
        <line x1="462" y1="301" x2="350" y2="390" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="350" y="403" fontSize="8.5" fill="#9C8062" textAnchor="middle">WEAPONS LOADING</text>
        <text x="350" y="413" fontSize="7" fill="#6b7264" textAnchor="middle">Magazine trunk access</text>

        <circle cx="502" cy="307" r="1.5" fill="#8FA388" opacity="0.5" />
        <line x1="502" y1="310" x2="502" y2="390" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="502" y="403" fontSize="8.5" fill="#8FA388" textAnchor="middle">AFT ELEVATOR</text>
        <text x="502" y="413" fontSize="7" fill="#6b7264" textAnchor="middle">Recovery priority — rearm</text>

        <circle cx="462" cy="318" r="1.5" fill="#7a8a70" opacity="0.5" />
        <line x1="462" y1="325" x2="640" y2="390" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="640" y="403" fontSize="8.5" fill="#7a8a70" textAnchor="middle">EDGE COMPUTE NODE</text>
        <text x="640" y="413" fontSize="7" fill="#6b7264" textAnchor="middle">Swarm inference + ISR proc</text>

        <circle cx="610" cy="340" r="1.5" fill="#9C8062" opacity="0.5" />
        <line x1="610" y1="345" x2="780" y2="390" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="780" y="403" fontSize="8.5" fill="#9C8062" textAnchor="middle">AFT STOWAGE — 60 CELLS</text>
        <text x="780" y="413" fontSize="7" fill="#6b7264" textAnchor="middle">Post-recovery staging</text>
      </g>

      {/* Flow indicators — above ship */}
      <g stroke="#8FA388" strokeWidth="0.6" fill="none" opacity="0.3">
        <line x1="80" y1="260" x2="60" y2="260" markerEnd="url(#arrow)" />
        <text x="70" y="248" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#8FA388" opacity="0.5" textAnchor="middle">LAUNCH</text>
        <text x="70" y="278" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#8FA388" opacity="0.5" textAnchor="middle">FLOW</text>
      </g>
      <g stroke="#9C8062" strokeWidth="0.6" fill="none" opacity="0.3">
        <line x1="880" y1="260" x2="900" y2="260" markerEnd="url(#arrow)" />
        <text x="890" y="248" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#9C8062" opacity="0.5" textAnchor="middle">RECOVERY</text>
        <text x="890" y="278" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#9C8062" opacity="0.5" textAnchor="middle">FLOW</text>
      </g>

      {/* Cycle paths — outside hull */}
      <path d="M460 175 C460 145,480 130,510 130 L530 130 C560 130,580 145,580 175" fill="none" stroke="#8FA388" strokeWidth="0.4" strokeDasharray="4 2" opacity="0.3" markerEnd="url(#arrow)" />
      <text x="520" y="125" fontFamily="var(--font-mono),monospace" fontSize="6" fill="#6b7264" textAnchor="middle">CYCLE</text>
      <path d="M580 345 C580 375,560 390,530 390 L510 390 C480 390,460 375,460 345" fill="none" stroke="#8FA388" strokeWidth="0.4" strokeDasharray="4 2" opacity="0.3" markerEnd="url(#arrow)" />
      <text x="520" y="398" fontFamily="var(--font-mono),monospace" fontSize="6" fill="#6b7264" textAnchor="middle">CYCLE</text>

      {/* Legend — bottom */}
      <rect x="240" y="460" width="480" height="55" rx="3" fill="#1a1b1c" stroke="#3a3b36" strokeWidth="0.4" />
      <g fontFamily="var(--font-mono),monospace" fontSize="7">
        <text x="255" y="476" fill="#8FA388" letterSpacing=".08em">FWD STOWAGE (LAUNCH)</text>
        <text x="495" y="476" fill="#9C8062" letterSpacing=".08em">AFT STOWAGE (RECOVERY)</text>
        <text x="255" y="491" fill="#8FA388" letterSpacing=".08em">ELEVATOR SHAFT</text>
        <text x="495" y="491" fill="#7a8a70" letterSpacing=".08em">EDGE COMPUTE</text>
        <text x="255" y="506" fill="#b89a7a" letterSpacing=".08em">CIC / HUMAN-MACHINE</text>
        <text x="495" y="506" fill="#6b7264" letterSpacing=".08em">H1 OF 3 (x3 = 120+ TOTAL)</text>
      </g>

      <DroneFlowOverlay />

      <text x="16" y="530" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#4a4f44" letterSpacing=".06em">DWG NO. CVA-003-HD REV.A</text>
      <text x="944" y="530" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#4a4f44" letterSpacing=".06em" textAnchor="end">SHIELD AI x ANP STUDIO // CONFIDENTIAL</text>
    </svg>
  );
}
