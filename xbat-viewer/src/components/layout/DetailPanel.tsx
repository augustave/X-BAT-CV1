import { motion, AnimatePresence } from 'framer-motion';
import { useViewerStore } from '../../stores/viewerStore';
import { zonesById } from '../../data/zones';
import { narratives } from '../../data/narrative';

export function DetailPanel() {
  const { activeZone, detailPanelOpen, closePanel, setActiveView } = useViewerStore();
  const zone = activeZone ? zonesById[activeZone] : null;
  const narrative = zone ? narratives[zone.narrativeKey] : null;

  return (
    <AnimatePresence>
      {detailPanelOpen && zone && (
        <motion.div
          initial={{ x: 380 }}
          animate={{ x: 0 }}
          exit={{ x: 380 }}
          transition={{ duration: 0.12, ease: [0.32, 0, 0.67, 0] }}
          className="absolute right-0 top-0 bottom-0 w-[380px] overflow-y-auto z-20"
          style={{
            backgroundColor: '#1F2022',
            borderLeft: '3px solid #2a2b2d',
            boxShadow: '-4px 0 16px rgba(0,0,0,0.5)',
          }}
        >
          {/* Header — inverted high contrast */}
          <div
            className="p-4"
            style={{
              backgroundColor: '#8FA388',
              borderBottom: '2px solid #4B533E',
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase" style={{ color: '#1F2022' }}>
                  {zone.shortName}
                </div>
                <h2 className="text-[13px] font-mono font-bold uppercase tracking-wide mt-0.5" style={{ color: '#1F2022' }}>
                  {zone.name}
                </h2>
              </div>
              <button
                onClick={closePanel}
                className="text-[10px] font-mono font-bold px-2 py-1.5 cursor-pointer uppercase tracking-wider"
                style={{
                  color: '#8FA388',
                  backgroundColor: '#1F2022',
                  border: '2px solid #4B533E',
                }}
              >
                ESC
              </button>
            </div>
            <p className="text-[10px] font-mono mt-1.5 tracking-wide" style={{ color: '#3d3d35' }}>
              {zone.subtitle}
            </p>
          </div>

          {/* Specs */}
          <div className="p-4" style={{ borderBottom: '2px solid #2a2b2d' }}>
            <div
              className="text-[8px] font-mono font-bold tracking-[0.25em] uppercase mb-3 pb-1"
              style={{ color: '#6b7264', borderBottom: '1px solid #2a2b2d' }}
            >
              SPECIFICATIONS
            </div>
            <div className="space-y-2.5">
              {Object.entries(zone.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-baseline gap-3">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider" style={{ color: '#6b7264' }}>
                    {key}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-right" style={{ color: '#8FA388' }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative */}
          {narrative && (
            <div className="p-4" style={{ borderBottom: '2px solid #2a2b2d' }}>
              <div
                className="text-[8px] font-mono font-bold tracking-[0.25em] uppercase mb-3 pb-1"
                style={{ color: '#6b7264', borderBottom: '1px solid #2a2b2d' }}
              >
                DESIGN RATIONALE
              </div>
              <div
                className="pl-3"
                style={{ borderLeft: '3px solid #4B533E' }}
              >
                <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider mb-2" style={{ color: '#9C8062' }}>
                  {narrative.title}
                </h3>
                <p className="text-[10px] font-mono leading-[1.7]" style={{ color: '#8FA388' }}>
                  {narrative.body}
                </p>
              </div>
            </div>
          )}

          {/* Cross-references */}
          <div className="p-4">
            <div
              className="text-[8px] font-mono font-bold tracking-[0.25em] uppercase mb-3 pb-1"
              style={{ color: '#6b7264', borderBottom: '1px solid #2a2b2d' }}
            >
              ALSO VISIBLE IN
            </div>
            <div className="flex flex-wrap gap-1.5">
              {zone.views.map((viewId) => (
                <button
                  key={viewId}
                  onClick={() => setActiveView(viewId)}
                  className="px-3 py-2 text-[9px] font-mono font-bold tracking-[0.15em] uppercase cursor-pointer"
                  style={{
                    border: '2px solid #3a3b36',
                    color: '#8FA388',
                    backgroundColor: '#141516',
                  }}
                >
                  {viewId === 'plan' ? 'PLAN' :
                   viewId === 'hangar' ? 'HANGAR' :
                   viewId === 'side' ? 'SIDE' : 'MIDSHIP'}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
