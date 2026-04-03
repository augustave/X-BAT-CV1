import { create } from 'zustand';

export type ViewId = 'plan' | 'hangar' | 'side' | 'midship';
export type AnimationMode = 'idle' | 'launch' | 'recovery' | 'full-cycle';

interface ViewerState {
  activeView: ViewId;
  activeZone: string | null;
  hoveredZone: string | null;
  animationMode: AnimationMode;
  animationSpeed: number;
  detailPanelOpen: boolean;

  setActiveView: (view: ViewId) => void;
  setActiveZone: (zoneId: string | null) => void;
  setHoveredZone: (zoneId: string | null) => void;
  setAnimationMode: (mode: AnimationMode) => void;
  setAnimationSpeed: (speed: number) => void;
  closePanel: () => void;
}

export const useViewerStore = create<ViewerState>((set) => ({
  activeView: 'plan',
  activeZone: null,
  hoveredZone: null,
  animationMode: 'full-cycle',
  animationSpeed: 1,
  detailPanelOpen: false,

  setActiveView: (view) => set({ activeView: view }),
  setActiveZone: (zoneId) => set({
    activeZone: zoneId,
    detailPanelOpen: zoneId !== null,
  }),
  setHoveredZone: (zoneId) => set({ hoveredZone: zoneId }),
  setAnimationMode: (mode) => set({ animationMode: mode }),
  setAnimationSpeed: (speed) => set({ animationSpeed: speed }),
  closePanel: () => set({ activeZone: null, detailPanelOpen: false }),
}));
