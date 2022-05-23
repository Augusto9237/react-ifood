function Order({ commands }) {
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
}
