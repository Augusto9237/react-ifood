import React from 'react';

import './styles.css';

export default function CardLogin({ children }) {
  return (
    <div className="cardLogin-container">
      <div className="cardLogin-content">
        <h1>Login</h1>
        <label>Email</label>
        <input required />
        <label>Senha</label>
        <input />
        {children}
      </div>
    </div>
  );
}
