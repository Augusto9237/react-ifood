import React from 'react';

import './style.css';

export default function Card({ height, direction, children }) {
  return <div className="card-container">{children}</div>;
}
