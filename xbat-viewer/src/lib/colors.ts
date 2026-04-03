export const colors = {
  // Tactical Documentary Palette
  olive: '#4B533E',
  oliveLight: '#5e664d',
  black: '#1F2022',
  blackDeep: '#141516',
  phosphor: '#8FA388',
  phosphorBright: '#a8c4a0',
  tan: '#9C8062',
  tanLight: '#b89a7a',
  earth: '#5A5A4F',
  earthDark: '#3d3d35',
  bezel: '#2a2b2d',
  border: '#3a3b36',
  text: '#8FA388',
  textDim: '#6b7264',
  textFaint: '#4a4f44',
  danger: '#c45c3e',

  // Zone accent colors (desaturated tactical)
  launch: '#8FA388',    // phosphor green
  recovery: '#9C8062',  // canvas tan
  compute: '#7a8a70',   // muted olive
  c2: '#6b7264',        // dim green
  cic: '#b89a7a',       // tan light
  stroke: '#5e664d',    // olive light
} as const;

export type ZoneColor = 'launch' | 'recovery' | 'compute' | 'c2' | 'cic' | 'stroke';

export const zoneColorMap: Record<ZoneColor, string> = {
  launch: colors.launch,
  recovery: colors.recovery,
  compute: colors.compute,
  c2: colors.c2,
  cic: colors.cic,
  stroke: colors.stroke,
};
