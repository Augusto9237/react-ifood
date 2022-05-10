import React from 'react';
import ButtonStatus from '../ButtonStatus/ButtonStatus';
import './style.css';

export default function Table({ children }) {
  return (
    <div>
      <table className="table">
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Fone</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>Island Trading</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
        </tr>
      </table>
    </div>
  );
}
