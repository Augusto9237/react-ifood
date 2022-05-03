import React from 'react';

import './styles.css';

export default function Header({ title, children }) {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const dataAtual = dia + '/' + mes + '/' + ano;
  return (
    <div className="header-container">
      <h1>{title}</h1>
      <span>{dataAtual}</span>
      <div className="header-menu">{children}</div>
    </div>
  );
}
