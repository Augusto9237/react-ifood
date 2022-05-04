import React, { useState } from 'react';
import { Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom';

import {
  ImHome,
  ImPieChart,
  ImCart,
  ImExit,
  ImCoinDollar,
  ImArrowUp2,
  ImUserPlus,
} from 'react-icons/im';

import './style.css';
import Sidebar from './components/UI/Sidebar/Sidebar';
import Header from './components/UI/Header/Header';
import ContainerHome from './components/UI/ContainerHome/ContainerHome';
import ColumnOrders from './components/UI/ColumnOrders/ColumnOrders';
import Columm from './components/UI/Columm/Columm';
import Card from './components/Card/Card';
import Table from './components/Table/Table';
import FormAtt from './components/FormAttendants/FormAtt';
import Button from './components/Button/Button';
import CardExtra from './components/CardExtra/CardExtra';
import CardLogin from './components/CardLogin/CardLogin';
import CardOrder from './components/CardOrder/CardOrder';
import OrderItem from './components/OrderItem/OrderItem';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Pedido" element={<Order />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="attendants" element={<Attendants />} />
        </Route>
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Sidebar>
        <nav className="header">
          <Link to="/">
            <div className="containerButtons">
              <ImHome />
            </div>
          </Link>

          <Link to="/Pedido">
            <div className="containerButtons">
              <div className="containerButtons-cart">0</div>
              <ImCart />
            </div>
          </Link>

          <Link to="/dashboard">
            <div className="containerButtons">
              <ImPieChart />
            </div>
          </Link>

          <Link to="/attendants">
            <div className="containerButtons">
              <ImUserPlus />
            </div>
          </Link>

          <Link to="login">
            <div className="containerButtonsExit">
              <ImExit />
            </div>
          </Link>
        </nav>
      </Sidebar>

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <ContainerHome>
        <Header title="Home">
          <div className="menu">Entradas</div>
          <div className="menu">Bebidas</div>
          <div className="menu">Pratos</div>
        </Header>
        <div className="body-list">
          <Card>
            <div className="productImg">
              <img src="https://lh3.googleusercontent.com/p/AF1QipPPtbkULVpHYKXNjo3jl1oANyIFKAGGXtqMzwX9=w768-h768-n-o-v1" />
            </div>
            <h4>Balde de Cerveja heineken</h4>
            <span>
              06 Long Neck cerveja Heineken (garrafas 330ml cada)01 Balde de
              alumínio
            </span>
            <h1>R$ 50,00</h1>
            <Button>Adicionar ao Pedido</Button>
          </Card>
        </div>
      </ContainerHome>
      <Columm>
        <ColumnOrders />
      </Columm>
    </div>
  );
}

function Order() {
  return (
    <div>
      <ContainerHome>
        <Header title="Pedido">
          <span>Id Pedido: </span>
          <span>Cliente: </span>
          <span>Mesa: </span>
        </Header>
        <div className="Items-order_Menu">
          <div style={{ width: '40%', textAlign: 'center' }}>
            <span>Produto</span>
          </div>
          <div>
            <span>Preço</span>
          </div>
          <div style={{ width: '10%' }}>
            <span>Quantidade</span>
          </div>
          <div>
            <span>Subtotal</span>
          </div>
        </div>
        <CardOrder>
          <OrderItem />
        </CardOrder>
      </ContainerHome>
      <Columm>
        <CardExtra />

        <CardExtra />
      </Columm>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <ContainerHome>
        <Header title="Dashboard"></Header>
        <div className="flat-list">
          <Card height={{ height: 143 }}>
            <div className="headerCard">
              <div className="iconsStyle">
                <ImCoinDollar size={28} />
              </div>
              <span>+50%</span>
              <div className="arrowUp">
                <ImArrowUp2 />
              </div>
            </div>
            <div className="contentCard">
              <h1>R$ 1.000,00</h1>
              <span>Total de Pedidos</span>
            </div>
          </Card>
        </div>
        <CardOrder>
          <div className="title-container_order">
            <h4>Orders</h4>
          </div>
          <div>
            <Table />
          </div>
        </CardOrder>
      </ContainerHome>

      <Columm>
        <CardExtra />
        <CardExtra />
      </Columm>
    </div>
  );
}

function Attendants() {
  return (
    <>
      <ContainerHome>
        <Header title="Atendentes"></Header>

        <div className="attendants-container">
          <Table />
        </div>
      </ContainerHome>
      <Columm>
        <FormAtt />
      </Columm>
    </>
  );
}

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <CardLogin>
        <Button onclick={navigate('/')}>Entrar</Button>
      </CardLogin>
    </div>
  );
}
