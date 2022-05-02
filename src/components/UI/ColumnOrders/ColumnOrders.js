import React from 'react';

import { ImBin } from 'react-icons/im';

import './styles.css';
import ButtonOrder from '../../ButtonOrders/ButtonOrder';
import Button from '../../Button/Button';
export default function ColumnOrders() {
  return (
    <div className="columnOrders">
      <div className="columnContent">
        <div className="colummHeader">
          <span>Orders #34562</span>
          <div className="contentButton-orders">
            <ButtonOrder>Dine In</ButtonOrder>
            <ButtonOrder></ButtonOrder>
            <ButtonOrder></ButtonOrder>
          </div>
          <div className="colummTitle">
            <span>Item</span>
            <div>
              <span style={{ marginRight: 14 }}>Quant</span>
              <span>Preço</span>
            </div>
          </div>
        </div>
        <div className="cardItems">
          <div className="cardTitle">
            <div className="cardContent">
              <img src="https://lh3.googleusercontent.com/p/AF1QipPPtbkULVpHYKXNjo3jl1oANyIFKAGGXtqMzwX9=w768-h768-n-o-v1" />
              <span>Spicy seasoned seaoa...</span>
              <input />
              <span>R$ 50,00</span>
            </div>
            <div className="cardFooter">
              <input placeholder="Adicionar descrição" />
              <button className="btnDelete">
                <ImBin />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="columnFooter">
        <div className="colummFooter-content">
          <span>Desconto</span>
          <span>Total</span>
          <Button>Continue para Pagamentos</Button>
        </div>
      </div>
    </div>
  );
}
