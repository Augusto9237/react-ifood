import React from 'react';
import ButtonStatus from '../ButtonStatus/ButtonStatus';
import './style.css';

export default function Table({ children }) {
  return (
    <div class="divTable body">
      <div class="divTableHeading">
        <div class="divTableRowHead">
          <div class="divTableHead">Cliente</div>
          <div class="divTableHead">Menu</div>
          <div class="divTableHead">Total a Pagar</div>
          <div class="divTableHead">Status</div>
        </div>
      </div>
      <div class="divTableBody">
        <div class="divTableRow">
          <div class="divTableCell">Eren Jaegar</div>
          <div class="divTableCell">Spicy seasoned seafood noodles</div>
          <div class="divTableCell">$125</div>
          <div class="divTableCell">
            <ButtonStatus status="completed">Completo</ButtonStatus>
          </div>
        </div>
        <div class="divTableRow">
          <div class="divTableCell">Eren Jaegar</div>
          <div class="divTableCell">Spicy seasoned seafood noodles</div>
          <div class="divTableCell">$125</div>
          <div class="divTableCell">
            <ButtonStatus status="preparing">Preparando</ButtonStatus>
          </div>
        </div>
        <div class="divTableRow">
          <div class="divTableCell">Eren Jaegar</div>
          <div class="divTableCell">Spicy seasoned seafood noodles</div>
          <div class="divTableCell">$125</div>
          <div class="divTableCell">
            <ButtonStatus status="pending">Pendente</ButtonStatus>
          </div>
        </div>
      </div>
      <div class="divTableFoot tableFootStyle"></div>
    </div>
  );
}
