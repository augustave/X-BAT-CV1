import React from 'react';

interface Props {
  width: number;
  height: number;
  majorStep?: number;
  minorStep?: number;
}

export function BlueprintGrid({ width, height, majorStep = 40, minorStep = 20 }: Props) {
  const majorLines: React.ReactElement[] = [];
  const minorLines: React.ReactElement[] = [];

  for (let y = majorStep; y < height; y += majorStep) {
    majorLines.push(<line key={`mh${y}`} x1="0" y1={y} x2={width} y2={y} />);
  }
  for (let x = majorStep; x < width; x += majorStep) {
    majorLines.push(<line key={`mv${x}`} x1={x} y1="0" x2={x} y2={height} />);
  }

  for (let y = minorStep; y < height; y += minorStep) {
    if (y % majorStep !== 0) {
      minorLines.push(<line key={`nh${y}`} x1="0" y1={y} x2={width} y2={y} />);
    }
  }
  for (let x = minorStep; x < width; x += minorStep) {
    if (x % majorStep !== 0) {
      minorLines.push(<line key={`nv${x}`} x1={x} y1="0" x2={x} y2={height} />);
    }
  }

  return (
    <>
      <g stroke="#2a2b2d" strokeWidth="0.4" fill="none">
        {majorLines}
      </g>
      <g stroke="#222320" strokeWidth="0.2" fill="none">
        {minorLines}
      </g>
    </>
  );
}
