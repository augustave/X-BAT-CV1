import { useViewerStore, type ViewId } from '../../stores/viewerStore';

const views: { id: ViewId; label: string; key: string }[] = [
  { id: 'plan', label: 'PLAN', key: '1' },
  { id: 'hangar', label: 'HANGAR', key: '2' },
  { id: 'side', label: 'SIDE', key: '3' },
  { id: 'midship', label: 'MIDSHIP', key: '4' },
];

export function ViewTabs() {
  const { activeView, setActiveView } = useViewerStore();

  return (
    <div
      className="flex gap-0"
      style={{
        border: '2px solid #2a2b2d',
        backgroundColor: '#1F2022',
        boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
      }}
    >
      {views.map((view) => {
        const isActive = activeView === view.id;
        return (
          <button
            key={view.id}
            onClick={() => setActiveView(view.id)}
            className="relative px-4 py-2.5 font-mono text-[10px] font-bold tracking-[0.15em] uppercase cursor-pointer transition-none"
            style={{
              color: isActive ? '#1F2022' : '#6b7264',
              backgroundColor: isActive ? '#8FA388' : 'transparent',
              borderRight: '1px solid #2a2b2d',
              minWidth: '80px',
              textShadow: isActive ? 'none' : undefined,
            }}
          >
            <span className="relative z-10">{view.label}</span>
            <span
              className="absolute bottom-1 right-1.5 text-[7px] font-mono"
              style={{ color: isActive ? '#4B533E' : '#3a3b36' }}
            >
              {view.key}
            </span>
          </button>
        );
      })}
    </div>
  );
}
