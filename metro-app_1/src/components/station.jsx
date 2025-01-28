import React from 'react';

function Station({ station }) {
  return (
    <li className="station">
      <div className="line">{station.line}</div>
      <h2>{station.name}</h2>
    </li>
  );
}

export default Station;