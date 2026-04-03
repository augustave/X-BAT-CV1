import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useViewerStore } from '../../stores/viewerStore';
import { flowPaths, type FlowPath } from '../../data/droneFlowPaths';

interface DroneProps {
  path: FlowPath;
  speed: number;
  delay: number;
}

function AnimatedDrone({ path, speed, delay }: DroneProps) {
  const xs = path.waypoints.map(w => w.x);
  const ys = path.waypoints.map(w => w.y);
  const totalDuration = (3 / speed) + path.waypoints.reduce((acc, w) => acc + (w.delay || 0), 0) / speed;

  return (
    <g>
      {/* Trail */}
      <motion.circle
        r={2}
        fill={path.color}
        opacity={0.2}
        initial={{ cx: xs[0], cy: ys[0] }}
        animate={{ cx: xs, cy: ys }}
        transition={{
          duration: totalDuration,
          delay: delay + 0.1,
          repeat: Infinity,
          repeatDelay: 1 / speed,
          ease: 'linear',
        }}
      />
      <motion.circle
        r={1.5}
        fill={path.color}
        opacity={0.4}
        initial={{ cx: xs[0], cy: ys[0] }}
        animate={{ cx: xs, cy: ys }}
        transition={{
          duration: totalDuration,
          delay: delay + 0.05,
          repeat: Infinity,
          repeatDelay: 1 / speed,
          ease: 'linear',
        }}
      />
      {/* Main dot */}
      <motion.circle
        r={3}
        fill={path.color}
        initial={{ cx: xs[0], cy: ys[0], opacity: 0 }}
        animate={{
          cx: xs,
          cy: ys,
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: totalDuration,
          delay,
          repeat: Infinity,
          repeatDelay: 1 / speed,
          ease: 'linear',
        }}
      />
      {/* Glow */}
      <motion.circle
        r={6}
        fill={path.color}
        opacity={0.15}
        initial={{ cx: xs[0], cy: ys[0] }}
        animate={{ cx: xs, cy: ys }}
        transition={{
          duration: totalDuration,
          delay,
          repeat: Infinity,
          repeatDelay: 1 / speed,
          ease: 'linear',
        }}
      />
    </g>
  );
}

export function DroneFlowOverlay() {
  const { activeView, animationMode, animationSpeed } = useViewerStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(animationMode !== 'idle');
  }, [animationMode]);

  const paths = flowPaths[activeView] || [];
  const activePaths = paths.filter(p => {
    if (animationMode === 'full-cycle') return true;
    if (animationMode === 'launch') return p.type === 'launch';
    if (animationMode === 'recovery') return p.type === 'recovery';
    return false;
  });

  return (
    <AnimatePresence>
      {visible && (
        <g>
          {activePaths.map((path, i) => (
            <AnimatedDrone
              key={path.id}
              path={path}
              speed={animationSpeed}
              delay={i * 0.8}
            />
          ))}
        </g>
      )}
    </AnimatePresence>
  );
}
