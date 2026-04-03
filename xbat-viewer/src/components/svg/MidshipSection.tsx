import { GlowFilters } from './shared/GlowFilter';
import { InteractiveZone } from './shared/InteractiveZone';
import { DroneFlowOverlay } from '../animations/DroneFlowOverlay';

export function MidshipSection() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 680 430" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <GlowFilters />
      <rect width="680" height="430" fill="#141516" />

      {/* Grid */}
      <g stroke="#2a2b2d" strokeWidth="0.3" fill="none">
        {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map(y => (
          <line key={`h${y}`} x1="0" y1={y} x2="680" y2={y} />
        ))}
        {[80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600].map(x => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="430" />
        ))}
      </g>

      <text x="16" y="24" fontFamily="var(--font-mono),monospace" fontSize="8" fill="#4a4f44" letterSpacing=".08em">MIDSHIP SECTION — FR. 88 (LOOKING FWD)</text>

      {/* Hull cross-section */}
      <InteractiveZone zoneId="hull-stealth" color="c2">
        <path d="M215 100 L200 240 L230 300 L290 328 L390 328 L450 300 L480 240 L465 100 Z" fill="#1a1b1c" stroke="#5e664d" strokeWidth="1" />
        <path d="M228 120 L215 235 L240 285 L295 310 L385 310 L440 285 L465 235 L452 120 Z" fill="none" stroke="#3a3b36" strokeWidth="0.3" strokeDasharray="4 2" />
      </InteractiveZone>

      {/* Waterline */}
      <line x1="155" y1="240" x2="525" y2="240" stroke="#4a4f44" strokeWidth="0.3" strokeDasharray="8 3" />
      <text x="530" y="243" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#4a4f44">WL</text>

      {/* Deck line */}
      <line x1="215" y1="100" x2="465" y2="100" stroke="#5e664d" strokeWidth="0.6" />

      {/* Tier separators */}
      <g stroke="#3a3b36" strokeWidth="0.35">
        <line x1="218" y1="145" x2="462" y2="145" />
        <line x1="220" y1="190" x2="460" y2="190" />
        <line x1="222" y1="232" x2="458" y2="232" />
      </g>

      {/* Center elevator */}
      <InteractiveZone zoneId="elevator-fwd" color="stroke">
        <rect x="325" y="105" width="30" height="128" fill="#1a1b1c" stroke="#8FA388" strokeWidth="0.4" strokeDasharray="4 2" />
        <text x="340" y="172" fontFamily="var(--font-mono),monospace" fontSize="6" fill="#8FA388" textAnchor="middle" opacity="0.5">EL</text>
      </InteractiveZone>

      {/* Drone silhouettes - Tier 1 */}
      <InteractiveZone zoneId="hangar-fwd" color="launch">
        <g fill="none" stroke="#8FA388" strokeWidth="0.3" opacity="0.5">
          {[240, 252, 264, 276, 288, 300].map(x => (
            <g key={x}>
              <rect x={x} y={108} width={5} height={30} rx={1} />
              <line x1={x - 2} y1={113} x2={x + 7} y2={113} />
            </g>
          ))}
          {[370, 382, 394, 406, 418, 430].map(x => (
            <g key={x}>
              <rect x={x} y={108} width={5} height={30} rx={1} />
              <line x1={x - 2} y1={113} x2={x + 7} y2={113} />
            </g>
          ))}
        </g>
        {/* Tier 2 */}
        <g fill="none" stroke="#8FA388" strokeWidth="0.3" opacity="0.35">
          {[242, 254, 266, 278, 290, 302].map(x => (
            <g key={x}>
              <rect x={x} y={153} width={5} height={30} rx={1} />
              <line x1={x - 2} y1={158} x2={x + 7} y2={158} />
            </g>
          ))}
          {[372, 384, 396, 408, 420, 432].map(x => (
            <g key={x}>
              <rect x={x} y={153} width={5} height={30} rx={1} />
              <line x1={x - 2} y1={158} x2={x + 7} y2={158} />
            </g>
          ))}
        </g>
        {/* Tier 3 */}
        <g fill="none" stroke="#8FA388" strokeWidth="0.3" opacity="0.2">
          {[245, 257, 269, 281, 293, 305].map(x => (
            <g key={x}>
              <rect x={x} y={198} width={5} height={28} rx={1} />
              <line x1={x - 2} y1={203} x2={x + 7} y2={203} />
            </g>
          ))}
          {[375, 387, 399, 411, 423, 435].map(x => (
            <g key={x}>
              <rect x={x} y={198} width={5} height={28} rx={1} />
              <line x1={x - 2} y1={203} x2={x + 7} y2={203} />
            </g>
          ))}
        </g>
      </InteractiveZone>

      {/* Tier labels */}
      <g fontFamily="var(--font-mono),monospace" fontSize="7.5">
        <text x="280" y="128" textAnchor="middle" fill="#8FA388" opacity="0.6">H1</text>
        <text x="400" y="128" textAnchor="middle" fill="#8FA388" opacity="0.6">H1</text>
        <text x="280" y="174" textAnchor="middle" fill="#8FA388" opacity="0.5">H2</text>
        <text x="400" y="174" textAnchor="middle" fill="#8FA388" opacity="0.5">H2</text>
        <text x="280" y="218" textAnchor="middle" fill="#8FA388" opacity="0.4">H3</text>
        <text x="400" y="218" textAnchor="middle" fill="#8FA388" opacity="0.4">H3</text>
      </g>

      {/* Void/ballast */}
      <g fontFamily="var(--font-mono),monospace" fontSize="7" fill="#6b7264">
        <text x="340" y="280" textAnchor="middle">VOID / BALLAST</text>
      </g>

      {/* Annotations */}
      <g fontFamily="var(--font-mono),monospace" fill="#8FA388" fontSize="8.5" letterSpacing=".06em">
        <circle cx="215" cy="100" r="1.5" fill="#5e664d" opacity="0.5" />
        <line x1="212" y1="98" x2="90" y2="60" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="85" y="57" fontSize="8.5" fill="#5e664d" textAnchor="end">TUMBLEHOME HULL</text>
        <text x="85" y="68" fontSize="7" fill="#6b7264" textAnchor="end">8° inward rake — RCS</text>

        <circle cx="340" cy="100" r="1.5" fill="#8FA388" opacity="0.5" />
        <line x1="340" y1="96" x2="340" y2="50" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <line x1="340" y1="50" x2="540" y2="50" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="545" y="47" fontSize="8.5" fill="#8FA388">FLAT FLIGHT DECK</text>
        <text x="545" y="58" fontSize="7" fill="#6b7264">No ski-jump — VTOL only</text>

        <circle cx="325" cy="170" r="1.5" fill="#8FA388" opacity="0.5" />
        <line x1="322" y1="170" x2="540" y2="85" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="545" y="82" fontSize="8.5" fill="#8FA388">CENTER ELEVATOR</text>
        <text x="545" y="93" fontSize="7" fill="#6b7264">Serves all 3 tiers</text>

        <circle cx="228" cy="235" r="1.5" fill="#5e664d" opacity="0.3" />
        <line x1="225" y1="235" x2="90" y2="300" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="85" y="297" fontSize="8.5" fill="#5e664d" textAnchor="end">DOUBLE HULL</text>
        <text x="85" y="308" fontSize="7" fill="#6b7264" textAnchor="end">12mm HY-100 + void</text>

        <circle cx="270" cy="128" r="1.5" fill="#8FA388" opacity="0.5" />
        <line x1="270" y1="125" x2="90" y2="125" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="85" y="122" fontSize="8.5" fill="#8FA388" textAnchor="end">X-BAT STOWAGE</text>
        <text x="85" y="133" fontSize="7" fill="#6b7264" textAnchor="end">Vertical tail-sitter racks</text>

        <text x="545" y="120" fontSize="8.5" fill="#8FA388">3-TIER LAYOUT</text>
        <text x="545" y="131" fontSize="7" fill="#6b7264">20 airframes / tier / side</text>
        <text x="545" y="142" fontSize="7" fill="#6b7264">= 120 per section pair</text>
      </g>

      <DroneFlowOverlay />

      {/* Beam dimension */}
      <g stroke="#3a3b36" strokeWidth="0.4" fill="none">
        <line x1="200" y1="350" x2="480" y2="350" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
        <text x="340" y="363" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#6b7264" textAnchor="middle">42 m beam at WL / 36 m at deck</text>
      </g>

      {/* Legend */}
      <rect x="195" y="380" width="290" height="38" rx="3" fill="#1a1b1c" stroke="#3a3b36" strokeWidth="0.4" />
      <g fontFamily="var(--font-mono),monospace" fontSize="7">
        <text x="203" y="394" fill="#8FA388" letterSpacing=".08em">FWD HANGARS (LAUNCH)</text>
        <text x="380" y="394" fill="#9C8062" letterSpacing=".08em">AFT HANGARS (RECOVERY)</text>
        <text x="203" y="408" fill="#8FA388" letterSpacing=".08em">ELEVATOR SHAFT</text>
        <text x="380" y="408" fill="#7a8a70" letterSpacing=".08em">EDGE COMPUTE</text>
      </g>
    </svg>
  );
}
