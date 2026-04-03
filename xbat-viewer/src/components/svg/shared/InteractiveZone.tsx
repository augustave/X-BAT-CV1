import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useViewerStore } from '../../../stores/viewerStore';
import type { ZoneColorName } from '../../../data/zones';

const glowMap: Record<ZoneColorName, string> = {
  launch: 'url(#glow-green)',
  recovery: 'url(#glow-orange)',
  compute: 'url(#glow-purple)',
  c2: 'url(#glow-blue)',
  cic: 'url(#glow-amber)',
  stroke: 'url(#glow-blue)',
};

interface Props {
  zoneId: string;
  color: ZoneColorName;
  children: ReactNode;
}

export function InteractiveZone({ zoneId, color, children }: Props) {
  const { activeZone, hoveredZone, setActiveZone, setHoveredZone } = useViewerStore();
  const isActive = activeZone === zoneId;
  const isHovered = hoveredZone === zoneId;
  const isHighlighted = isActive || isHovered;

  return (
    <motion.g
      style={{ cursor: 'pointer' }}
      filter={isHighlighted ? glowMap[color] : 'none'}
      animate={{
        opacity: isHighlighted ? 1 : undefined,
      }}
      transition={{ duration: 0.2 }}
      onClick={(e) => {
        e.stopPropagation();
        setActiveZone(isActive ? null : zoneId);
      }}
      onMouseEnter={() => setHoveredZone(zoneId)}
      onMouseLeave={() => setHoveredZone(null)}
    >
      {children}
    </motion.g>
  );
}
