import React, { useContext, useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Columm from "../../components/UI/Columm/Columm";
import ColumnOrders from "../../components/UI/ColumnOrders/ColumnOrders";
import ContainerHome from "../../components/UI/ContainerHome/ContainerHome";
import Header from "../../components/UI/Header/Header";
import { FirebaseContext } from "../../Contexts/FirebaseContex";

const Home = () => {
  const { products, createCommand } = useContext(FirebaseContext);
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmitCommand = (e) => {
    e.preventDefault();
    createCommand(
      productId,
      productName,
      productPrice,
      productDescription,
      productImage
    );
  };
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
              <Card key={product.id} setProductId={product.id}>
                <div className="productImg">
                  <img src={product.image} setProductImage={product.image} />
                </div>
                <h4 setProductName={product.name}>{product.name}</h4>
                <span setProductPrice={product.description}>
                  {product.description}
                </span>
                <h1 setProductPrice={product.price}>R$ {product.price}</h1>
                <Button onclick={handleSubmitCommand}>
                  Adicionar ao Pedido
                </Button>
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
