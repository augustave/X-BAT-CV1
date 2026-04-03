import type { ViewId } from '../stores/viewerStore';

export interface Waypoint {
  x: number;
  y: number;
  delay?: number;
}

export interface FlowPath {
  id: string;
  type: 'launch' | 'recovery';
  color: string;
  waypoints: Waypoint[];
}

export const flowPaths: Record<ViewId, FlowPath[]> = {
  plan: [
    {
      id: 'plan-launch-1',
      type: 'launch',
      color: '#8FA388',
      waypoints: [
        { x: 419, y: 260 },
        { x: 400, y: 260 },
        { x: 340, y: 230, delay: 0.2 },
        { x: 250, y: 230, delay: 0.3 },
        { x: 140, y: 230 },
      ],
    },
    {
      id: 'plan-launch-2',
      type: 'launch',
      color: '#8FA388',
      waypoints: [
        { x: 419, y: 260 },
        { x: 400, y: 260 },
        { x: 340, y: 290, delay: 0.2 },
        { x: 250, y: 290, delay: 0.3 },
        { x: 140, y: 290 },
      ],
    },
    {
      id: 'plan-recovery-1',
      type: 'recovery',
      color: '#9C8062',
      waypoints: [
        { x: 820, y: 230 },
        { x: 680, y: 230 },
        { x: 600, y: 230, delay: 0.3 },
        { x: 540, y: 260 },
        { x: 519, y: 260 },
      ],
    },
    {
      id: 'plan-recovery-2',
      type: 'recovery',
      color: '#9C8062',
      waypoints: [
        { x: 820, y: 290 },
        { x: 680, y: 290 },
        { x: 600, y: 290, delay: 0.3 },
        { x: 540, y: 260 },
        { x: 519, y: 260 },
      ],
    },
  ],
  hangar: [
    {
      id: 'hangar-launch-1',
      type: 'launch',
      color: '#8FA388',
      waypoints: [
        { x: 370, y: 240 },
        { x: 405, y: 240 },
        { x: 422, y: 260, delay: 0.3 },
        { x: 250, y: 260 },
        { x: 130, y: 260 },
      ],
    },
    {
      id: 'hangar-launch-2',
      type: 'launch',
      color: '#8FA388',
      waypoints: [
        { x: 370, y: 280 },
        { x: 405, y: 280 },
        { x: 422, y: 260, delay: 0.3 },
        { x: 250, y: 260 },
        { x: 130, y: 260 },
      ],
    },
    {
      id: 'hangar-recovery-1',
      type: 'recovery',
      color: '#9C8062',
      waypoints: [
        { x: 830, y: 260 },
        { x: 650, y: 260 },
        { x: 502, y: 260, delay: 0.2 },
        { x: 485, y: 240 },
        { x: 550, y: 240 },
      ],
    },
    {
      id: 'hangar-recovery-2',
      type: 'recovery',
      color: '#9C8062',
      waypoints: [
        { x: 830, y: 260 },
        { x: 650, y: 260 },
        { x: 502, y: 260, delay: 0.2 },
        { x: 485, y: 280 },
        { x: 550, y: 280 },
      ],
    },
  ],
  side: [
    {
      id: 'side-launch',
      type: 'launch',
      color: '#8FA388',
      waypoints: [
        { x: 220, y: 200 },
        { x: 290, y: 200 },
        { x: 305, y: 200 },
        { x: 305, y: 168, delay: 0.3 },
        { x: 305, y: 140 },
      ],
    },
    {
      id: 'side-recovery',
      type: 'recovery',
      color: '#9C8062',
      waypoints: [
        { x: 445, y: 140 },
        { x: 445, y: 168, delay: 0.3 },
        { x: 445, y: 200 },
        { x: 480, y: 200 },
        { x: 520, y: 200 },
      ],
    },
  ],
  midship: [
    {
      id: 'midship-up',
      type: 'launch',
      color: '#8FA388',
      waypoints: [
        { x: 280, y: 220 },
        { x: 325, y: 220 },
        { x: 340, y: 190 },
        { x: 340, y: 145, delay: 0.2 },
        { x: 340, y: 100 },
      ],
    },
    {
      id: 'midship-down',
      type: 'recovery',
      color: '#9C8062',
      waypoints: [
        { x: 340, y: 100 },
        { x: 340, y: 145, delay: 0.2 },
        { x: 340, y: 190 },
        { x: 355, y: 220 },
        { x: 400, y: 220 },
      ],
    },
  ],
};
