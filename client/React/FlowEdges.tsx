import React from 'react';

interface CustomE{
  id:string;
  sourceX: number;
  sourceY:number;
  targetX:number;
  targetY:number,

  style: Record<string, unknown>;

  // eslint-disable-next-line react/require-default-props
  markerEnd?: string| undefined;
}

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,

  style = {},

  markerEnd,
}: CustomE) {
  return (
    <path
      id={id}
      style={style}
      className="react-flow__edge-path animated"
      d={`M${sourceX},${sourceY} C  ${targetX} ${sourceY} ${targetX} ${sourceY} ${targetX},${targetY}`}
      markerEnd={markerEnd}
    />
  );
}
