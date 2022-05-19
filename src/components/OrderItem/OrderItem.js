import React from "react";

import "./styles.css";
import { ImBin } from "react-icons/im";
export default function OrderItem({ children, commands }) {
  console.log(commands);
  return (
    <div className="orderItem-container">
      <div className="orderItem-content">
        <div className="orderItem-imageProduct">
          <img src="https://espetinhodesucesso.com.br/wp-content/uploads/2018/03/melhores-carnes-para-churrasco-1200x900.jpg" />
        </div>

        <span>{commands.items.nameProduct}</span>
        <span>R$ {commands.items.price}</span>
        <input type="Number" value={commands.items.quantity} />
        <span>R$ {commands.items.subtotal}</span>
      </div>

      <div className="orderItem-content">
        <textarea> </textarea>
        <button className="orderItem-contentbtnDelete">
          <ImBin />
        </button>
      </div>
    </div>
  );
}
