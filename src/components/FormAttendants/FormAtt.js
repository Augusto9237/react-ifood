import React from "react";
import { ImCircleLeft, ImPlus } from "react-icons/im";
import "./styles.css";

import Button from "../Button/Button";

export default function FormAtt({
  name,
  setName,
  email,
  setEmail,
  createUser
}) {
  return (
    <div className="form-body">
      <div className="Form-content">
        <ImCircleLeft size={24} color={"#ffff"} />
        <div className="Form-header">
          <h1>Novo Atendente</h1>
        </div>
        <div className="form-group">
          <span>Nome</span>
          <input
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <span>Email</span>

          <input
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group-buttons">
          <button onClick={createUser}>SALVAR</button>
          <button className="buttonCancel">CANCELAR</button>
        </div>
      </div>
    </div>
  );
}
