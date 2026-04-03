import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useViewerStore, type ViewId } from './stores/viewerStore';
import { ViewTabs } from './components/layout/ViewTabs';
import { DetailPanel } from './components/layout/DetailPanel';
import { StatusBar } from './components/layout/StatusBar';
import { BootSequence } from './components/ui/BootSequence';
import { PlanView } from './components/svg/PlanView';
import { HangarDeck } from './components/svg/HangarDeck';
import { SideElevation } from './components/svg/SideElevation';
import { MidshipSection } from './components/svg/MidshipSection';

const viewComponents = {
  plan: PlanView,
  hangar: HangarDeck,
  side: SideElevation,
  midship: MidshipSection,
};

const viewOrder: ViewId[] = ['plan', 'hangar', 'side', 'midship'];

// Mechanical snap transition — no bounce, high inertia
const mechTransition = { duration: 0.15, ease: [0.32, 0, 0.67, 0] as const };

function App() {
  const { activeView, setActiveView, setActiveZone, closePanel } = useViewerStore();
  const ViewComponent = viewComponents[activeView];
  const [booted, setBooted] = useState(false);
  const handleBootComplete = useCallback(() => setBooted(true), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closePanel(); return; }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const idx = viewOrder.indexOf(activeView);
        const next = e.key === 'ArrowRight'
          ? viewOrder[(idx + 1) % viewOrder.length]
          : viewOrder[(idx - 1 + viewOrder.length) % viewOrder.length];
        setActiveView(next);
      }
      if (e.key >= '1' && e.key <= '4') {
        const idx = parseInt(e.key) - 1;
        if (viewOrder[idx]) setActiveView(viewOrder[idx]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closePanel, activeView, setActiveView]);

  return (
    <div className="h-full flex flex-col film-grain relative" style={{ backgroundColor: '#141516' }}>
      {/* Boot sequence overlay */}
      <AnimatePresence>
        {!booted && <BootSequence onComplete={handleBootComplete} />}
      </AnimatePresence>

      {/* Hardware bezel header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.05 }}
        className="flex items-center justify-between px-5 py-2.5"
        style={{
          backgroundColor: '#1F2022',
          borderBottom: '3px solid #2a2b2d',
          boxShadow: 'inset 0 -1px 0 #3a3b36',
        }}
      >
        <div>
          <div
            className="text-[14px] font-mono font-bold tracking-[0.2em] uppercase"
            style={{ color: '#8FA388' }}
          >
            X-BAT CVA-1
          </div>
          <div className="text-[9px] font-mono tracking-[0.14em] uppercase" style={{ color: '#6b7264' }}>
            AUTONOMOUS VTOL CARRIER — DEADLIGHT CLASS
          </div>
        </div>
        <div className="text-right text-[8px] font-mono leading-relaxed uppercase tracking-wider" style={{ color: '#4a4f44' }}>
          CONCEPT // MARCH 2026<br />
          SYS VIEWER v1.0
        </div>
      </motion.header>

      {/* Main viewport — ruggedized frame */}
      <div
        className="flex-1 relative overflow-hidden"
        onClick={() => setActiveZone(null)}
        style={{ backgroundColor: '#141516' }}
      >
        {/* Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none z-30 scanlines" />

        {/* SVG viewport */}
        <div className="h-full flex items-center justify-center p-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={mechTransition}
              className="w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <ViewComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View tabs — bottom left, hardware style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
          className="absolute bottom-3 left-3 z-10"
        >
          <ViewTabs />
        </motion.div>

        {/* Detail panel */}
        <DetailPanel />
      </div>

      {/* Status bar — bottom bezel */}
      <StatusBar />
    </div>
  );
}

export default App;
