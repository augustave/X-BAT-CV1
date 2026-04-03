import { GlowFilters } from './shared/GlowFilter';
import { BlueprintGrid } from './shared/BlueprintGrid';
import { InteractiveZone } from './shared/InteractiveZone';
import { DroneFlowOverlay } from '../animations/DroneFlowOverlay';

export function PlanView() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 960 540" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <GlowFilters />
      <rect width="960" height="540" fill="#141516" />
      <BlueprintGrid width={960} height={540} />

      <text x="16" y="28" fontFamily="var(--font-mono),monospace" fontSize="8" fill="#4a4f44" letterSpacing=".08em">X-BAT CVA-1 // GENERAL ARRANGEMENT — PLAN VIEW</text>

      {/* Hull outline */}
      <InteractiveZone zoneId="hull-stealth" color="c2">
        <path d="M90 260 L130 220 L200 195 L350 180 L600 175 L750 178 L820 185 L850 200 L860 260 L850 320 L820 335 L750 342 L600 345 L350 340 L200 325 L130 300 Z" fill="#1a1b1c" stroke="#5e664d" strokeWidth="1.2" />
        <path d="M105 260 L140 225 L208 202 L355 188 L600 183 L745 186 L812 192 L840 206 L850 260 L840 314 L812 328 L745 334 L600 337 L355 332 L208 318 L140 295 Z" fill="none" stroke="#4a4f44" strokeWidth="0.4" strokeDasharray="6 3" />
      </InteractiveZone>

      {/* Centerline */}
      <line x1="130" y1="260" x2="830" y2="260" stroke="#3a3b36" strokeWidth="0.5" strokeDasharray="8 4" />

      {/* Bow detail */}
      <path d="M110 260 L130 250 L125 255 L140 260 L125 265 L130 270 Z" fill="#222320" stroke="#5e664d" strokeWidth="0.5" />

      {/* Frame lines */}
      <g stroke="#4a4f44" strokeWidth="0.3" fill="none">
        <line x1="200" y1="210" x2="200" y2="195" />
        <line x1="200" y1="310" x2="200" y2="325" />
        <line x1="400" y1="195" x2="400" y2="180" />
        <line x1="400" y1="325" x2="400" y2="340" />
        <line x1="700" y1="195" x2="700" y2="180" />
        <line x1="700" y1="325" x2="700" y2="340" />
      </g>

      {/* Launch pads L1-L4 */}
      <InteractiveZone zoneId="launch-grid" color="launch">
        {[
          { cx: 250, cy: 230, label: 'L1' },
          { cx: 250, cy: 290, label: 'L2' },
          { cx: 340, cy: 230, label: 'L3' },
          { cx: 340, cy: 290, label: 'L4' },
        ].map(pad => (
          <g key={pad.label} fill="none" strokeWidth="0.5">
            <circle cx={pad.cx} cy={pad.cy} r={22} stroke="#8FA388" strokeOpacity="0.7" />
            <line x1={pad.cx} y1={pad.cy - 16} x2={pad.cx} y2={pad.cy + 16} stroke="#8FA388" strokeOpacity="0.4" />
            <line x1={pad.cx - 16} y1={pad.cy} x2={pad.cx + 16} y2={pad.cy} stroke="#8FA388" strokeOpacity="0.4" />
            <text x={pad.cx} y={pad.cy + 3} fontFamily="var(--font-mono),monospace" fontSize="7" fill="#8FA388" textAnchor="middle" dominantBaseline="central" opacity="0.6">{pad.label}</text>
          </g>
        ))}
      </InteractiveZone>

      {/* Recovery pads R1-R4 */}
      <InteractiveZone zoneId="recovery-grid" color="recovery">
        {[
          { cx: 600, cy: 230, label: 'R1' },
          { cx: 600, cy: 290, label: 'R2' },
          { cx: 680, cy: 230, label: 'R3' },
          { cx: 680, cy: 290, label: 'R4' },
        ].map(pad => (
          <g key={pad.label} fill="none" strokeWidth="0.5">
            <circle cx={pad.cx} cy={pad.cy} r={22} stroke="#9C8062" strokeOpacity="0.7" />
            <line x1={pad.cx} y1={pad.cy - 16} x2={pad.cx} y2={pad.cy + 16} stroke="#9C8062" strokeOpacity="0.4" />
            <line x1={pad.cx - 16} y1={pad.cy} x2={pad.cx + 16} y2={pad.cy} stroke="#9C8062" strokeOpacity="0.4" />
            <text x={pad.cx} y={pad.cy + 3} fontFamily="var(--font-mono),monospace" fontSize="7" fill="#9C8062" textAnchor="middle" dominantBaseline="central" opacity="0.6">{pad.label}</text>
          </g>
        ))}
      </InteractiveZone>

      {/* Forward elevator */}
      <InteractiveZone zoneId="elevator-fwd" color="stroke">
        <rect x="400" y="238" width="38" height="44" rx="3" fill="none" stroke="#8FA388" strokeWidth="0.4" strokeDasharray="4 2" />
        <text x="419" y="262" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#8FA388" textAnchor="middle" dominantBaseline="central" opacity="0.5">ELEV-1</text>
        <line x1="400" y1="252" x2="438" y2="252" stroke="#8FA388" strokeWidth="0.2" strokeDasharray="2 2" />
        <line x1="400" y1="268" x2="438" y2="268" stroke="#8FA388" strokeWidth="0.2" strokeDasharray="2 2" />
      </InteractiveZone>

      {/* Aft elevator */}
      <InteractiveZone zoneId="elevator-aft" color="stroke">
        <rect x="500" y="238" width="38" height="44" rx="3" fill="none" stroke="#8FA388" strokeWidth="0.4" strokeDasharray="4 2" />
        <text x="519" y="262" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#8FA388" textAnchor="middle" dominantBaseline="central" opacity="0.5">ELEV-2</text>
        <line x1="500" y1="252" x2="538" y2="252" stroke="#8FA388" strokeWidth="0.2" strokeDasharray="2 2" />
        <line x1="500" y1="268" x2="538" y2="268" stroke="#8FA388" strokeWidth="0.2" strokeDasharray="2 2" />
      </InteractiveZone>

      {/* C2 Node */}
      <InteractiveZone zoneId="c2-node" color="c2">
        <polygon points="465,195 485,215 465,235 445,215" fill="#1a1b1c" stroke="#5e664d" strokeWidth="0.8" />
        <polygon points="465,201 479,215 465,229 451,215" fill="none" stroke="#5e664d" strokeWidth="0.3" />
        <text x="465" y="218" fontFamily="var(--font-mono),monospace" fontSize="6" fill="#5e664d" textAnchor="middle" dominantBaseline="central">C2</text>
      </InteractiveZone>

      {/* Compute farm */}
      <InteractiveZone zoneId="compute-farm" color="compute">
        <rect x="440" y="280" width="50" height="24" rx="2" fill="#1a1b1c" stroke="#7a8a70" strokeWidth="0.5" strokeDasharray="3 2" />
        <text x="465" y="294" fontFamily="var(--font-mono),monospace" fontSize="6" fill="#7a8a70" textAnchor="middle" dominantBaseline="central" opacity="0.7">COMPUTE</text>
        <g fill="#7a8a70" opacity="0.3">
          {[444, 449, 454, 459, 464, 469, 474, 479, 484].map(x => (
            <rect key={x} x={x} y={284} width={3.5} height={4} rx="0.5" />
          ))}
        </g>
      </InteractiveZone>

      {/* Bow/stern markers */}
      <polygon points="115,260 125,255 122,260 125,265" fill="#5e664d" opacity="0.6" />
      <polygon points="845,260 835,255 838,260 835,265" fill="#5e664d" opacity="0.6" />

      {/* CIWS */}
      <InteractiveZone zoneId="ciws" color="c2">
        <g fill="none" stroke="#5e664d" strokeWidth="0.3" opacity="0.4">
          <circle cx="180" cy="195" r="6" /><line x1="177" y1="192" x2="183" y2="198" />
          <circle cx="180" cy="325" r="6" /><line x1="177" y1="322" x2="183" y2="328" />
          <circle cx="790" cy="195" r="6" /><line x1="787" y1="192" x2="793" y2="198" />
          <circle cx="790" cy="325" r="6" /><line x1="787" y1="322" x2="793" y2="328" />
        </g>
      </InteractiveZone>

      {/* Annotations — top (above ship) */}
      <g fontFamily="var(--font-mono),monospace" fill="#8FA388" fontSize="9" letterSpacing=".06em">
        {/* RCS-optimized bow */}
        <InteractiveZone zoneId="aesa-array" color="c2">
          <circle cx="130" cy="220" r="2" fill="#5e664d" opacity="0.5" />
          <line x1="130" y1="218" x2="130" y2="100" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
          <text x="130" y="92" textAnchor="middle" fontSize="8.5" fill="#5e664d">RCS-OPTIMIZED BOW</text>
          <text x="130" y="80" textAnchor="middle" fontSize="7" fill="#6b7264">Faceted geometry — tumblehome</text>
          <text x="130" y="69" textAnchor="middle" fontSize="7" fill="#6b7264">94% RCS &#x2193; vs Nimitz profile</text>
        </InteractiveZone>

        {/* FWD AESA array */}
        <circle cx="150" cy="195" r="2" fill="#5e664d" opacity="0.5" />
        <line x1="150" y1="193" x2="250" y2="100" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="250" y="92" textAnchor="middle" fontSize="8.5" fill="#8FA388">FWD AESA ARRAY</text>
        <text x="250" y="80" textAnchor="middle" fontSize="7" fill="#6b7264">360&#xb0; passive / active scan</text>

        {/* CIWS / directed energy */}
        <circle cx="790" cy="195" r="2" fill="#5e664d" opacity="0.3" />
        <line x1="790" y1="193" x2="790" y2="100" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="790" y="92" textAnchor="middle" fontSize="8.5" fill="#5e664d">CIWS / DIRECTED ENERGY</text>
        <text x="790" y="80" textAnchor="middle" fontSize="7" fill="#6b7264">Point defense — 4&#xd7; stations</text>

        {/* Flush C2 node */}
        <circle cx="465" cy="195" r="2" fill="#5e664d" opacity="0.5" />
        <line x1="465" y1="193" x2="465" y2="115" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="465" y="107" textAnchor="middle" fontSize="8.5" fill="#5e664d">FLUSH C2 NODE</text>
        <text x="465" y="95" textAnchor="middle" fontSize="7" fill="#6b7264">No island — zero visual sig</text>
        <text x="465" y="84" textAnchor="middle" fontSize="7" fill="#6b7264">Autonomous ops / SATCOM</text>

        {/* Annotations — bottom (below ship) */}

        {/* VTOL launch grid */}
        <circle cx="295" cy="310" r="2" fill="#8FA388" opacity="0.5" />
        <line x1="295" y1="312" x2="210" y2="395" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="210" y="405" textAnchor="middle" fontSize="8.5" fill="#8FA388">VTOL LAUNCH GRID</text>
        <text x="210" y="417" textAnchor="middle" fontSize="7" fill="#6b7264">4&#xd7; simultaneous launch</text>
        <text x="210" y="428" textAnchor="middle" fontSize="7" fill="#6b7264">No catapult — 3&#xd7; sortie rate</text>

        {/* Fwd elevator annotation */}
        <circle cx="419" cy="282" r="2" fill="#8FA388" opacity="0.5" />
        <line x1="419" y1="284" x2="390" y2="395" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="390" y="405" textAnchor="middle" fontSize="8.5" fill="#8FA388">FWD DRONE ELEVATOR</text>
        <text x="390" y="417" textAnchor="middle" fontSize="7" fill="#6b7264">Auto handling — 0 deck crew</text>

        {/* Aft elevator annotation */}
        <circle cx="519" cy="282" r="2" fill="#8FA388" opacity="0.5" />
        <line x1="519" y1="284" x2="560" y2="395" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="560" y="405" textAnchor="middle" fontSize="8.5" fill="#8FA388">AFT DRONE ELEVATOR</text>
        <text x="560" y="417" textAnchor="middle" fontSize="7" fill="#6b7264">Access to 3-tier hangar</text>

        {/* Edge compute farm */}
        <circle cx="465" cy="304" r="2" fill="#7a8a70" opacity="0.5" />
        <line x1="465" y1="306" x2="465" y2="440" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="465" y="450" textAnchor="middle" fontSize="8.5" fill="#7a8a70">EDGE COMPUTE FARM</text>
        <text x="465" y="462" textAnchor="middle" fontSize="7" fill="#6b7264">Onboard swarm autonomy</text>
        <text x="465" y="473" textAnchor="middle" fontSize="7" fill="#6b7264">Hivemind / V-JEPA inference</text>

        {/* VTOL recovery grid */}
        <circle cx="640" cy="310" r="2" fill="#9C8062" opacity="0.5" />
        <line x1="640" y1="312" x2="720" y2="395" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="720" y="405" textAnchor="middle" fontSize="8.5" fill="#9C8062">VTOL RECOVERY GRID</text>
        <text x="720" y="417" textAnchor="middle" fontSize="7" fill="#6b7264">4&#xd7; simultaneous recovery</text>
        <text x="720" y="428" textAnchor="middle" fontSize="7" fill="#6b7264">Auto rearm / battery swap</text>

        {/* Split stern */}
        <circle cx="840" cy="260" r="2" fill="#5e664d" opacity="0.5" />
        <line x1="842" y1="260" x2="890" y2="395" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="890" y="405" textAnchor="middle" fontSize="8.5" fill="#5e664d">SPLIT STERN / WATERJET</text>
        <text x="890" y="417" textAnchor="middle" fontSize="7" fill="#6b7264">Reduced acoustic signature</text>
        <text x="890" y="428" textAnchor="middle" fontSize="7" fill="#6b7264">30+ knots sustained</text>
      </g>

      {/* Dimension lines — LOA along bottom */}
      <g stroke="#3a3b36" strokeWidth="0.4" fill="none">
        <line x1="90" y1="485" x2="860" y2="485" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
        <text x="475" y="498" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#6b7264" textAnchor="middle">210 m / 689 ft</text>
      </g>
      {/* Dimension lines — beam on right side */}
      <g stroke="#3a3b36" strokeWidth="0.4" fill="none">
        <line x1="920" y1="175" x2="920" y2="345" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
        <text x="915" y="264" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#6b7264" textAnchor="end" transform="rotate(-90 915 264)">42 m / 138 ft beam</text>
      </g>

      {/* Legend */}
      <rect x="400" y="505" width="160" height="22" rx="3" fill="#1a1b1c" stroke="#3a3b36" strokeWidth="0.4" />
      <text x="408" y="519" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#8FA388" letterSpacing=".1em">● LAUNCH PADS (L1-L4)</text>
      <text x="500" y="519" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#9C8062" letterSpacing=".1em">● RECOVERY PADS (R1-R4)</text>

      <DroneFlowOverlay />

      <text x="16" y="532" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#4a4f44" letterSpacing=".06em">DWG NO. CVA-001-GA REV.A</text>
      <text x="944" y="532" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#4a4f44" letterSpacing=".06em" textAnchor="end">SHIELD AI × ANP STUDIO // CONFIDENTIAL</text>
    </svg>
  );
}
