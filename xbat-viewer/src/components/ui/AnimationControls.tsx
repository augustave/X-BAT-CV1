import { useViewerStore, type AnimationMode } from '../../stores/viewerStore';

const modes: { id: AnimationMode; label: string }[] = [
  { id: 'idle', label: 'OFF' },
  { id: 'launch', label: 'LAUNCH' },
  { id: 'recovery', label: 'RECOVERY' },
  { id: 'full-cycle', label: 'FULL CYC' },
];

const speeds = [0.5, 1, 2];

export function AnimationControls() {
  const { animationMode, animationSpeed, setAnimationMode, setAnimationSpeed } = useViewerStore();

  return (
    <div className="flex items-center gap-3">
      <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase" style={{ color: '#6b7264' }}>
        DRONE OPS
      </span>
      <div className="flex gap-0" style={{ border: '2px solid #3a3b36' }}>
        {modes.map(mode => {
          const isActive = animationMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setAnimationMode(mode.id)}
              className="px-3 py-2 text-[10px] font-mono font-bold tracking-wider uppercase cursor-pointer transition-none"
              style={{
                color: isActive ? '#1F2022' : '#8FA388',
                backgroundColor: isActive ? '#8FA388' : '#1F2022',
                borderRight: '1px solid #3a3b36',
              }}
            >
              {mode.label}
            </button>
          );
        })}
      </div>
      <div className="flex gap-0" style={{ border: '2px solid #3a3b36' }}>
        {speeds.map(speed => {
          const isActive = animationSpeed === speed;
          return (
            <button
              key={speed}
              onClick={() => setAnimationSpeed(speed)}
              className="px-2.5 py-2 text-[10px] font-mono font-bold cursor-pointer transition-none"
              style={{
                color: isActive ? '#1F2022' : '#6b7264',
                backgroundColor: isActive ? '#6b7264' : '#1F2022',
                borderRight: '1px solid #3a3b36',
              }}
            >
              {speed}×
            </button>
          );
        })}
      </div>
    </div>
  );
}
