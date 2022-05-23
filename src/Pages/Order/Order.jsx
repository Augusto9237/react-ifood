import { useContext } from "react";
import CardExtra from "../../components/CardExtra/CardExtra";
import CardOrder from "../../components/CardOrder/CardOrder";
import OrderItem from "../../components/OrderItem/OrderItem";
import Columm from "../../components/UI/Columm/Columm";
import ContainerHome from "../../components/UI/ContainerHome/ContainerHome";
import Header from "../../components/UI/Header/Header";
import { FirebaseContext } from "../../Contexts/FirebaseContex";

const Order = () => {
  const { commands } = useContext(FirebaseContext);
  return (
    <div>
      <ContainerHome>
        <Header title="Pedido">
          <span>Id Pedido: </span>
          <span>Cliente: </span>
          <span>Mesa: </span>
        </Header>

        <div className="Items-order_Menu">
          <div style={{ width: "40%", textAlign: "center" }}>
            <span>Produto</span>
          </div>
          <div>
            <span>Preço</span>
          </div>
          <div style={{ width: "10%" }}>
            <span>Quantidade</span>
          </div>
          <div>
            <span>Subtotal</span>
          </div>
        </div>
        <CardOrder>
          {commands.map((comand) => {
            return <OrderItem commands={comand} key={comand.id} />;
          })}
        </CardOrder>
      </ContainerHome>
      <Columm>
        <CardExtra />

        <CardExtra />
      </Columm>
    </div>
  );
};

export default Order;
