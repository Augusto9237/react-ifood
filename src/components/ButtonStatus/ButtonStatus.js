import React from 'react';

import './style.css';

export default function ButtonStatus({ children, status }) {
  return <div className={status}>{children}</div>;
}
