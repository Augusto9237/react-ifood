import React from 'react';
import { ImCircleLeft, ImPlus } from 'react-icons/im';
import './styles.css';

import Button from '../Button/Button';

export default function FormAtt() {
  return (
    <div className="form-body">
      <div className="Form-content">
        <ImCircleLeft size={24} color={'#ffff'} />
        <div className="Form-header">
          <h1>Novo Atendente</h1>
        </div>
        <form>
          <div className="form-group">
            <span>Nome</span>
            <input />
          </div>

          <div className="form-group">
            <span>Telefone</span>
            <input />
          </div>

          <div className="form-group">
            <span>Mesas</span>
            <input />
          </div>

          <div className="form-group-buttons">
            <Button>SALVAR</Button>
            <button className="buttonCancel">CANCELAR</button>
          </div>
        </form>
      </div>
    </div>
  );
}
