import React from 'react';

import './styles.css';

export default function Header({ title, children }) {
  return (
    <div className="header-container">
      <h1>{title}</h1>
      <div className="header-content">{children}</div>
    </div>
  );
}
