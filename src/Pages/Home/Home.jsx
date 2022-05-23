import React, { useContext, useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Columm from "../../components/UI/Columm/Columm";
import ColumnOrders from "../../components/UI/ColumnOrders/ColumnOrders";
import ContainerHome from "../../components/UI/ContainerHome/ContainerHome";
import Header from "../../components/UI/Header/Header";
import { FirebaseContext } from "../../Contexts/FirebaseContex";

const Home = () => {
  const { products } = useContext(FirebaseContext);
  return (
    <div>
      <ContainerHome>
        <Header title="Home">
          <div className="menu">Entradas</div>
          <div className="menu">Bebidas</div>
          <div className="menu">Pratos</div>
        </Header>
        <div className="body-list">
          {products.map((product) => {
            return (
              <Card key={product.id}>
                <div className="productImg">
                  <img src={product.image} />
                </div>
                <h4>{product.name}</h4>
                <span>{product.description}</span>
                <h1>R$ {product.price}</h1>
                <Button>Adicionar ao Pedido</Button>
              </Card>
            );
          })}
        </div>
      </ContainerHome>
      <Columm>
        <ColumnOrders />
      </Columm>
    </div>
  );
};

export default Home;
