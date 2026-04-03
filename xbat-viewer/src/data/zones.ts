import type { ViewId } from '../stores/viewerStore';

export type ZoneColorName = 'launch' | 'recovery' | 'compute' | 'c2' | 'cic' | 'stroke';

export interface Zone {
  id: string;
  name: string;
  shortName: string;
  color: ZoneColorName;
  colorHex: string;
  views: ViewId[];
  subtitle: string;
  specs: Record<string, string>;
  narrativeKey: string;
}

export const zones: Zone[] = [
  {
    id: 'launch-grid',
    name: 'VTOL Launch Grid',
    shortName: 'LAUNCH',
    color: 'launch',
    colorHex: '#8FA388',
    views: ['plan', 'side'],
    subtitle: '4\u00D7 simultaneous launch pads',
    specs: {
      'Pads': '4\u00D7 simultaneous (L1\u2013L4)',
      'Sortie rate': '32/hr sustained',
      'Mechanism': 'No catapult \u2014 VTOL direct',
      'vs Nimitz': '3\u00D7 sortie rate improvement',
    },
    narrativeKey: 'vtol-grid',
  },
  {
    id: 'recovery-grid',
    name: 'VTOL Recovery Grid',
    shortName: 'RECOVERY',
    color: 'recovery',
    colorHex: '#9C8062',
    views: ['plan', 'side'],
    subtitle: '4\u00D7 simultaneous recovery pads',
    specs: {
      'Pads': '4\u00D7 simultaneous (R1\u2013R4)',
      'Cycle': 'Auto rearm / battery swap',
      'Turnaround': '90-second battery swap',
      'Handling': 'Zero deck crew',
    },
    narrativeKey: 'battery-swap',
  },
  {
    id: 'elevator-fwd',
    name: 'Forward Drone Elevator',
    shortName: 'ELEV-1',
    color: 'stroke',
    colorHex: '#8FA388',
    views: ['plan', 'hangar', 'side'],
    subtitle: 'Launch priority \u2014 40 drones/hr throughput',
    specs: {
      'Throughput': '40 drones / hr',
      'Priority': 'Launch operations',
      'Handling': 'Automated \u2014 0 deck crew',
      'Access': '3-tier hangar',
    },
    narrativeKey: 'conveyor',
  },
  {
    id: 'elevator-aft',
    name: 'Aft Drone Elevator',
    shortName: 'ELEV-2',
    color: 'stroke',
    colorHex: '#8FA388',
    views: ['plan', 'hangar', 'side'],
    subtitle: 'Recovery priority \u2014 rearm staging',
    specs: {
      'Priority': 'Recovery / rearm',
      'Flow': 'Aft cells to service zone',
      'Handling': 'Automated rail system',
      'Access': '3-tier hangar',
    },
    narrativeKey: 'conveyor',
  },
  {
    id: 'compute-farm',
    name: 'Edge Compute Farm',
    shortName: 'COMPUTE',
    color: 'compute',
    colorHex: '#6B7264',
    views: ['plan', 'hangar', 'side', 'midship'],
    subtitle: 'Onboard swarm autonomy \u2014 Hivemind inference',
    specs: {
      'Function': 'Swarm autonomy + ISR processing',
      'Architecture': 'Hivemind / V-JEPA inference',
      'Position': 'Midship \u2014 max survivability',
      'Comms': 'No persistent BLOS required',
    },
    narrativeKey: 'compute',
  },
  {
    id: 'c2-node',
    name: 'Flush C2 Node',
    shortName: 'C2',
    color: 'c2',
    colorHex: '#5e664d',
    views: ['plan', 'side'],
    subtitle: 'No island \u2014 zero visual signature',
    specs: {
      'Type': 'Flush-mounted SATCOM/data node',
      'Profile': '5m total \u2014 no island',
      'Function': 'Autonomous ops / SATCOM',
      'RCS impact': 'Primary RCS reduction feature',
    },
    narrativeKey: 'hull-design',
  },
  {
    id: 'cic',
    name: 'CIC / Human-Machine Teaming',
    shortName: 'CIC',
    color: 'cic',
    colorHex: '#9C8062',
    views: ['hangar', 'side'],
    subtitle: '12 operators + legal review \u2014 DoDD 3000.09',
    specs: {
      'Crew': '12 of 45 total',
      'Function': 'Human-machine teaming',
      'Compliance': 'DoDD 3000.09 oversight',
      'Role': 'Legal/ethical engagement authority',
    },
    narrativeKey: 'cic-oversight',
  },
  {
    id: 'hangar-fwd',
    name: 'Forward Hangar (Launch)',
    shortName: 'FWD CELLS',
    color: 'launch',
    colorHex: '#8FA388',
    views: ['hangar', 'side', 'midship'],
    subtitle: '60 cells per tier \u2014 vertical tail-sitter racks',
    specs: {
      'Cells': '60 per tier (port + starboard)',
      'Stowage': 'Vertical tail-sitter racks',
      'Footprint': '1.2m \u00D7 0.8m each',
      'Function': 'Launch-assigned \u2014 hot loaded',
    },
    narrativeKey: 'hangar-logic',
  },
  {
    id: 'hangar-aft',
    name: 'Aft Hangar (Recovery)',
    shortName: 'AFT CELLS',
    color: 'recovery',
    colorHex: '#9C8062',
    views: ['hangar', 'side', 'midship'],
    subtitle: '60 cells per tier \u2014 post-recovery staging',
    specs: {
      'Cells': '60 per tier (port + starboard)',
      'Function': 'Recovery/rearm staging',
      'Flow': 'One-way conveyor \u2014 aft to forward',
      'Tiers': 'H1 active / H2-H3 reserve',
    },
    narrativeKey: 'hangar-logic',
  },
  {
    id: 'service-zone',
    name: 'Midship Service Zone',
    shortName: 'SERVICE',
    color: 'launch',
    colorHex: '#8FA388',
    views: ['hangar'],
    subtitle: 'Battery swap + rearm + payload + compute',
    specs: {
      'Battery swap': '90-second hot-swap cycle',
      'Rearm': 'Automated magazine trunk access',
      'Payload': 'Mission-configurable loadout',
      'Compute node': 'Local inference relay',
    },
    narrativeKey: 'battery-swap',
  },
  {
    id: 'hull-stealth',
    name: 'RCS-Optimized Hull',
    shortName: 'HULL',
    color: 'c2',
    colorHex: '#5e664d',
    views: ['plan', 'side', 'midship'],
    subtitle: 'Tumblehome geometry \u2014 94% RCS reduction',
    specs: {
      'Design': 'Tumblehome \u2014 8\u00B0 inward rake',
      'RCS': '94% reduction vs Nimitz',
      'Freeboard': '5m waterline to deck',
      'Material': '12mm HY-100 + void',
    },
    narrativeKey: 'hull-design',
  },
  {
    id: 'propulsion',
    name: 'Propulsion System',
    shortName: 'IEP',
    color: 'stroke',
    colorHex: '#5e664d',
    views: ['plan', 'hangar', 'side'],
    subtitle: 'IEP + twin waterjet \u2014 30+ knots',
    specs: {
      'Type': 'Integrated Electric Propulsion',
      'Jets': 'Twin waterjet',
      'Speed': '30+ knots sustained',
      'Acoustic': 'Reduced signature',
    },
    narrativeKey: 'hull-design',
  },
  {
    id: 'aesa-array',
    name: 'Forward AESA Array',
    shortName: 'AESA',
    color: 'c2',
    colorHex: '#5e664d',
    views: ['plan'],
    subtitle: '360\u00B0 passive / active scan',
    specs: {
      'Type': 'AESA radar array',
      'Coverage': '360\u00B0 passive/active',
      'Integration': 'CIC sensor suite',
      'EW': 'Electronic warfare capable',
    },
    narrativeKey: 'hull-design',
  },
  {
    id: 'ciws',
    name: 'CIWS / Directed Energy',
    shortName: 'CIWS',
    color: 'c2',
    colorHex: '#5e664d',
    views: ['plan'],
    subtitle: 'Point defense \u2014 4\u00D7 stations',
    specs: {
      'Stations': '4\u00D7 (forward + aft corners)',
      'Type': 'Directed energy',
      'Coverage': '360\u00B0 point defense',
      'Integration': 'Autonomous engagement',
    },
    narrativeKey: 'hull-design',
  },
];

export const zonesById = Object.fromEntries(zones.map(z => [z.id, z]));
