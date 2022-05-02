import React from 'react';

import './styles.css';
import { ImBin } from 'react-icons/im';
export default function OrderItem({ children }) {
  return (
    <div className="orderItem-container">
      <div className="orderItem-content">
        <div className="orderItem-imageProduct">
          <img src="https://espetinhodesucesso.com.br/wp-content/uploads/2018/03/melhores-carnes-para-churrasco-1200x900.jpg" />
        </div>
        <span>Spicy seasoned sea...</span>
        <span>R$ 50,00</span>
        <input type="Number" />
        <span>R$ 100,00</span>
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
