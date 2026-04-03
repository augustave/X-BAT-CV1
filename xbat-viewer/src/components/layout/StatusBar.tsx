import { specGrid } from '../../data/shipSpecs';

export function StatusBar() {
  return (
    <div
      className="grid grid-cols-3 md:grid-cols-9 gap-x-4 gap-y-1 px-5 py-2"
      style={{ backgroundColor: '#1F2022', borderTop: '3px solid #2a2b2d' }}
    >
      {specGrid.map((spec) => (
        <div key={spec.label}>
          <div className="text-[7px] font-mono font-bold tracking-[0.2em] uppercase" style={{ color: '#4a4f44' }}>
            {spec.label}
          </div>
          <div className="text-[10px] font-mono font-bold" style={{ color: '#8FA388' }}>
            {spec.value}
          </div>
        </div>
      ))}
    </div>
  );
}
