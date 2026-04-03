export interface NarrativeEntry {
  title: string;
  body: string;
}

export const narratives: Record<string, NarrativeEntry> = {
  'hull-design': {
    title: 'Hull Design Philosophy',
    body: 'Hull retained, island eliminated. The angular stealth profile is the right starting point \u2014 tumblehome hull, faceted bow, split stern. But the traditional island superstructure is gone entirely. A flush-mounted C2 diamond replaces it. No human LSOs, no visual observation deck, no mast \u2014 just a SATCOM/data node embedded in the deck surface. That\u2019s a 94% RCS reduction and the single loudest design statement on the blueprint.',
  },
  'vtol-grid': {
    title: 'VTOL Grid Replaces Runway',
    body: 'V-BAT and X-BAT are tail-sitter VTOL \u2014 they don\u2019t need 300m of runway, catapults, or arresting gear. That entire mechanical system (the most complex and failure-prone part of a carrier) is replaced by 8 marked pads: 4 launch forward, 4 recovery aft. Simultaneous 4-drone launch/recovery pushes sortie rate to 32/hr sustained \u2014 roughly 3\u00D7 what a Nimitz does with manned aircraft.',
  },
  'compute': {
    title: 'Edge Compute Farm',
    body: 'Onboard swarm autonomy means the drones don\u2019t need persistent BLOS comms to a remote ground station. The Hivemind inference stack runs on-hull. Ties directly into V-JEPA cognitive load gate work \u2014 the ship is the swarm brain. Positioned midship at the structural center for maximum survivability.',
  },
  'hangar-logic': {
    title: 'Three-Tier Hangar Logic',
    body: 'With no catapult machinery eating the first 60m of hull, and no arresting gear consuming the aft section, the entire interior becomes usable drone storage. Three full tiers running almost the complete length of the ship. The drone silhouettes are stored vertical \u2014 tail-sitter position \u2014 which packs dramatically tighter than folded-wing manned aircraft.',
  },
  'conveyor': {
    title: 'One-Way Conveyor Logic',
    body: 'Forward cells feed to forward elevator for launch. Recovered drones come down the aft elevator into aft cells. Between them: the midship service zone with battery swap, weapons loading, and compute. Drones cycle forward-to-aft through the ship like product through a factory. No conflicting traffic patterns, no two-way corridors. Think Amazon fulfillment center logic applied to munitions.',
  },
  'cic-oversight': {
    title: 'CIC & Human Oversight',
    body: 'The CIC isn\u2019t a traditional combat information center \u2014 it\u2019s a human-machine teaming space staffed by 12 of the 45-person crew. This is where DoDD 3000.09 compliance lives physically in the ship: legal review operators, engagement authority chains, the human judgment layer over autonomous targeting. The swarm runs itself operationally via the edge compute node midship, but every engagement decision routes through the CIC.',
  },
  'battery-swap': {
    title: '90-Second Battery Swap',
    body: 'A recovered X-BAT comes down the aft elevator, gets racked, swaps battery and payload in under two minutes, and re-queues for launch via the forward conveyor. That\u2019s what gets you to 32 sustained sorties per hour. The turnaround is the sortie rate multiplier.',
  },
  'freeboard': {
    title: 'The Freeboard Argument',
    body: 'The profile is absurdly low \u2014 5m from waterline to deck edge, maybe 18m total hull depth. A Nimitz stands 20m from waterline to flight deck alone, before the island adds another 40m of vertical radar signature. This ship doesn\u2019t need that height because there\u2019s no manned aircraft needing launch/recovery clearance overhead.',
  },
  'first-island-chain': {
    title: 'First Island Chain Context',
    body: 'Forward-deployed in contested waters near Taiwan means the low-RCS profile isn\u2019t aspirational \u2014 it\u2019s survival. The ship needs to loiter without being the loudest signature in theater, which validates every stealth decision: tumblehome, flush C2, eliminated island.',
  },
};
