import React, { useContext, useState } from "react";
import { ImCircleLeft, ImPlus } from "react-icons/im";
import "./styles.css";

import Button from "../Button/Button";
import { FirebaseContext } from "../../Contexts/FirebaseContex";

export default function FormAtt() {
  const { createUser } = useContext(FirebaseContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, email);
  };
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
          <Button onclick={handleSubmit}>SALVAR</Button>
          <button className="buttonCancel">CANCELAR</button>
        </div>
      </div>
    </div>
  );
}
