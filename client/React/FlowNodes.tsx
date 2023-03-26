/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { Handle } from 'react-flow-renderer';

function FlowNode({ data }) {
  const colArray = data.columns.map((column, idx: number) => (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label id={idx === 0 ? 'title' : 'row'} key={column}>
      {column}
    </label>
  ));

  // Array to hold all of our foreign key handles
  // eslint-disable-next-line no-undef
  const Handles: JSX.Element[] = [];
  // Handle distance will be 19px to get to column 0 position and 26px for each column after that
  // eslint-disable-next-line no-restricted-syntax
  for (const [name, index] of Object.entries(data.foreignKeys)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const handleStyle = { top: 28 + index * 26 };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Handles.push(
      <Handle
        type="source"
        key={name}
        id={name}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        position="right"
        style={handleStyle}
      />,
    );
  }

  return (
    <div className="table-node">
      {/* @ts-ignore */}
      <Handle type="target" position="left" style={{ top: 19 }} />
      <div id="table-container">{colArray}</div>
      {Handles}
    </div>
  );
}

export default FlowNode;
