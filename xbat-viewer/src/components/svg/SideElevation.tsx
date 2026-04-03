import { GlowFilters } from './shared/GlowFilter';
import { InteractiveZone } from './shared/InteractiveZone';
import { DroneFlowOverlay } from '../animations/DroneFlowOverlay';

export function SideElevation() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 680 430" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <GlowFilters />
      <rect width="680" height="430" fill="#141516" />

      {/* Grid */}
      <g stroke="#2a2b2d" strokeWidth="0.3" fill="none">
        {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map(y => (
          <line key={`h${y}`} x1="0" y1={y} x2="680" y2={y} />
        ))}
        {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640].map(x => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="430" />
        ))}
      </g>

      <text x="16" y="24" fontFamily="var(--font-mono),monospace" fontSize="8" fill="#4a4f44" letterSpacing=".08em">SIDE ELEVATION — CUTAWAY // X-BAT CVA-1</text>

      {/* Hull */}
      <InteractiveZone zoneId="hull-stealth" color="c2">
        <path d="M78 185 L105 170 L130 165 L575 165 L592 168 L598 175 L600 280 L596 308 L585 325 L200 330 L130 328 L112 312 L105 280 Z" fill="#1a1b1c" stroke="#5e664d" strokeWidth="1" />
      </InteractiveZone>

      {/* Waterline */}
      <line x1="55" y1="280" x2="625" y2="280" stroke="#4a4f44" strokeWidth="0.3" strokeDasharray="8 3" />
      <text x="630" y="283" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#4a4f44">WL</text>

      {/* Internal structure */}
      <g stroke="#3a3b36" strokeWidth="0.35">
        <line x1="155" y1="165" x2="155" y2="325" />
        <line x1="540" y1="165" x2="540" y2="325" />
        <line x1="155" y1="200" x2="540" y2="200" />
        <line x1="155" y1="235" x2="540" y2="235" />
        <line x1="155" y1="268" x2="540" y2="268" />
      </g>
      <g stroke="#3a3b36" strokeWidth="0.3" strokeDasharray="3 2">
        <line x1="155" y1="295" x2="540" y2="295" />
      </g>

      {/* Elevators */}
      <InteractiveZone zoneId="elevator-fwd" color="stroke">
        <rect x="290" y="168" width="30" height="200" fill="#1a1b1c" stroke="#8FA388" strokeWidth="0.4" strokeDasharray="4 2" />
      </InteractiveZone>
      <InteractiveZone zoneId="elevator-aft" color="stroke">
        <rect x="430" y="168" width="30" height="200" fill="#1a1b1c" stroke="#8FA388" strokeWidth="0.4" strokeDasharray="4 2" />
      </InteractiveZone>

      {/* Elevator arrows */}
      <g fill="none" stroke="#8FA388" strokeWidth="0.3" opacity="0.5">
        <line x1="298" y1="175" x2="298" y2="360" markerEnd="url(#arrow)" />
        <line x1="312" y1="360" x2="312" y2="175" markerEnd="url(#arrow)" />
        <line x1="438" y1="175" x2="438" y2="360" markerEnd="url(#arrow)" />
        <line x1="452" y1="360" x2="452" y2="175" markerEnd="url(#arrow)" />
      </g>

      {/* C2 node */}
      <InteractiveZone zoneId="c2-node" color="c2">
        <rect x="375" y="158" width="40" height="10" rx="2" fill="#1a1b1c" stroke="#5e664d" strokeWidth="0.6" />
      </InteractiveZone>

      {/* Bow/stern details */}
      <polygon points="92,178 102,170 112,178" fill="none" stroke="#5e664d" strokeWidth="0.5" opacity="0.6" />
      <polygon points="590,178 600,170 605,178" fill="none" stroke="#5e664d" strokeWidth="0.5" opacity="0.6" />

      {/* Section labels */}
      <InteractiveZone zoneId="cic" color="cic">
        <g fontFamily="var(--font-mono),monospace" fontSize="7" fill="#6b7264">
          <text x="115" y="186" textAnchor="middle">CIC</text>
          <text x="115" y="195" fontSize="6" fill="#4a4f44">SENS</text>
        </g>
      </InteractiveZone>

      <InteractiveZone zoneId="propulsion" color="stroke">
        <g fontFamily="var(--font-mono),monospace" fontSize="7" fill="#6b7264">
          <text x="560" y="186" textAnchor="middle">IEP</text>
          <text x="560" y="195" fontSize="6" fill="#4a4f44">JETS</text>
        </g>
      </InteractiveZone>

      {/* Hangar labels */}
      <InteractiveZone zoneId="hangar-fwd" color="launch">
        <g fontFamily="var(--font-mono),monospace" fontSize="7.5">
          <text x="220" y="186" textAnchor="middle" fill="#8FA388" opacity="0.7">HANGAR 1</text>
          <text x="220" y="221" textAnchor="middle" fill="#8FA388" opacity="0.6">HANGAR 2</text>
          <text x="220" y="256" textAnchor="middle" fill="#8FA388" opacity="0.5">HANGAR 3</text>
        </g>
        {/* Forward drone silhouettes */}
        <g fill="none" strokeWidth="0.35" opacity="0.4">
          <g stroke="#8FA388">
            {[175, 188, 201, 240, 253, 266].map(x => (
              <g key={x}>
                <rect x={x} y={172} width={6} height={24} rx={1} />
                <line x1={x - 2} y1={177} x2={x + 8} y2={177} />
              </g>
            ))}
          </g>
          <g stroke="#8FA388" opacity="0.8">
            {[175, 188, 201, 240, 253, 266].map(x => (
              <g key={x}>
                <rect x={x} y={207} width={6} height={24} rx={1} />
                <line x1={x - 2} y1={212} x2={x + 8} y2={212} />
              </g>
            ))}
          </g>
        </g>
      </InteractiveZone>

      <InteractiveZone zoneId="hangar-aft" color="recovery">
        <g fontFamily="var(--font-mono),monospace" fontSize="7.5">
          <text x="480" y="186" textAnchor="middle" fill="#9C8062" opacity="0.7">HANGAR 1</text>
          <text x="480" y="221" textAnchor="middle" fill="#9C8062" opacity="0.6">HANGAR 2</text>
          <text x="480" y="256" textAnchor="middle" fill="#9C8062" opacity="0.5">HANGAR 3</text>
        </g>
        {/* Aft drone silhouettes */}
        <g fill="none" strokeWidth="0.35" opacity="0.4">
          <g stroke="#9C8062">
            {[460, 473, 486, 505, 518].map(x => (
              <g key={x}>
                <rect x={x} y={172} width={6} height={24} rx={1} />
                <line x1={x - 2} y1={177} x2={x + 8} y2={177} />
              </g>
            ))}
          </g>
          <g stroke="#9C8062" opacity="0.8">
            {[460, 473, 486, 505, 518].map(x => (
              <g key={x}>
                <rect x={x} y={207} width={6} height={24} rx={1} />
                <line x1={x - 2} y1={212} x2={x + 8} y2={212} />
              </g>
            ))}
          </g>
        </g>
      </InteractiveZone>

      {/* Compute farm */}
      <InteractiveZone zoneId="compute-farm" color="compute">
        <rect x="345" y="240" width="75" height="22" rx="2" fill="#1a1b1c" stroke="#7a8a70" strokeWidth="0.4" />
        <g fill="#7a8a70" opacity="0.35">
          {[349, 354, 359, 364, 369, 374].map(x =>
            [244, 249, 254].map(y => (
              <rect key={`${x}-${y}`} x={x} y={y} width={3} height={3} rx="0.5" />
            ))
          )}
        </g>
        <text x="407" y="253" fontFamily="var(--font-mono),monospace" fontSize="6" fill="#7a8a70" opacity="0.6">COMPUTE</text>
      </InteractiveZone>

      {/* Below waterline labels */}
      <g fontFamily="var(--font-mono),monospace" fontSize="7" fill="#6b7264">
        <text x="250" y="310" textAnchor="middle">FUEL CELLS / BATTERY</text>
        <text x="480" y="310" textAnchor="middle">MAGAZINE</text>
      </g>
      <line x1="400" y1="280" x2="400" y2="325" stroke="#3a3b36" strokeWidth="0.3" strokeDasharray="3 2" />

      {/* Annotations */}
      <g fontFamily="var(--font-mono),monospace" fill="#8FA388" fontSize="8.5" letterSpacing=".06em">
        <circle cx="305" cy="168" r="1.5" fill="#8FA388" opacity="0.5" />
        <line x1="305" y1="163" x2="305" y2="60" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <line x1="305" y1="60" x2="470" y2="60" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="475" y="57" fontSize="8.5" fill="#8FA388">FWD ELEVATOR</text>
        <text x="475" y="68" fontSize="7" fill="#6b7264">40-drone / hr throughput</text>

        <circle cx="445" cy="168" r="1.5" fill="#8FA388" opacity="0.5" />
        <line x1="445" y1="163" x2="445" y2="85" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <line x1="445" y1="85" x2="470" y2="85" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="475" y="82" fontSize="8.5" fill="#8FA388">AFT ELEVATOR</text>
        <text x="475" y="93" fontSize="7" fill="#6b7264">Recovery / rearm priority</text>

        <circle cx="395" cy="158" r="1.5" fill="#5e664d" opacity="0.5" />
        <line x1="395" y1="153" x2="395" y2="110" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <line x1="395" y1="110" x2="470" y2="110" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="475" y="107" fontSize="8.5" fill="#5e664d">FLUSH C2 NODE</text>
        <text x="475" y="118" fontSize="7" fill="#6b7264">5m profile — no island</text>

        <circle cx="383" cy="251" r="1.5" fill="#7a8a70" opacity="0.5" />
        <line x1="420" y1="251" x2="470" y2="135" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="475" y="132" fontSize="8.5" fill="#7a8a70">EDGE COMPUTE</text>
        <text x="475" y="143" fontSize="7" fill="#6b7264">Hivemind swarm inference</text>

        <circle cx="130" cy="250" r="1.5" fill="#5e664d" opacity="0.5" />
        <line x1="130" y1="250" x2="30" y2="250" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <line x1="30" y1="250" x2="30" y2="80" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="16" y="77" fontSize="8.5" fill="#5e664d">CIC / SENSOR</text>
        <text x="16" y="88" fontSize="7" fill="#6b7264">AESA + EW suite</text>

        <circle cx="575" cy="250" r="1.5" fill="#5e664d" opacity="0.5" />
        <line x1="575" y1="250" x2="635" y2="250" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <line x1="635" y1="250" x2="635" y2="80" stroke="#3a3b36" strokeWidth="0.4" strokeDasharray="3 2" />
        <text x="630" y="77" fontSize="8.5" fill="#5e664d" textAnchor="end">PROPULSION</text>
        <text x="630" y="88" fontSize="7" fill="#6b7264" textAnchor="end">IEP + twin waterjet</text>
      </g>

      {/* Dimension lines */}
      <g stroke="#3a3b36" strokeWidth="0.4" fill="none">
        <line x1="78" y1="345" x2="600" y2="345" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
        <text x="340" y="358" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#6b7264" textAnchor="middle">210 m / 689 ft LOA</text>
      </g>
      <g stroke="#3a3b36" strokeWidth="0.4" fill="none">
        <line x1="50" y1="165" x2="50" y2="330" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
        <text x="42" y="260" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#6b7264" textAnchor="end">18m</text>
      </g>

      <DroneFlowOverlay />

      <text x="16" y="418" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#4a4f44" letterSpacing=".06em">DWG NO. CVA-002-SE REV.A</text>
      <text x="664" y="418" fontFamily="var(--font-mono),monospace" fontSize="7" fill="#4a4f44" letterSpacing=".06em" textAnchor="end">SHIELD AI × ANP STUDIO // CONFIDENTIAL</text>
    </svg>
  );
}
