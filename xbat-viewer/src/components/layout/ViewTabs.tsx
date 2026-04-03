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
        border: '2px solid #3a3b36',
        backgroundColor: '#1F2022',
      }}
    >
      {views.map((view) => {
        const isActive = activeView === view.id;
        return (
          <button
            key={view.id}
            onClick={() => setActiveView(view.id)}
            className="relative px-5 py-2 font-mono text-[11px] font-bold tracking-[0.15em] uppercase cursor-pointer transition-none"
            style={{
              color: isActive ? '#1F2022' : '#8FA388',
              backgroundColor: isActive ? '#8FA388' : 'transparent',
              borderRight: '1px solid #3a3b36',
              minWidth: '90px',
            }}
          >
            <span className="relative z-10">{view.label}</span>
            <span
              className="absolute bottom-0.5 right-1.5 text-[8px] font-mono"
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
