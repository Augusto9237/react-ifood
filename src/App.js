import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore";

import {
  ImHome,
  ImPieChart,
  ImCart,
  ImExit,
  ImCoinDollar,
  ImArrowUp2,
  ImUserPlus
} from "react-icons/im";

import "./style.css";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import Header from "./components/UI/Header/Header";
import ContainerHome from "./components/UI/ContainerHome/ContainerHome";
import ColumnOrders from "./components/UI/ColumnOrders/ColumnOrders";
import Columm from "./components/UI/Columm/Columm";
import Card from "./components/Card/Card";
import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
import CardExtra from "./components/CardExtra/CardExtra";
import CardLogin from "./components/CardLogin/CardLogin";
import CardOrder from "./components/CardOrder/CardOrder";
import OrderItem from "./components/OrderItem/OrderItem";
import Attendants from "./Pages/Attendants/AttendantsPage";
import { FirebaseProvider } from "./Contexts/FirebaseContex";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyArlrMtCj8XXKONRtG6_crV5467eumsbNA",
  authDomain: "reactfirebase-4fc5c.firebaseapp.com",
  projectId: "reactfirebase-4fc5c",
  storageBucket: "reactfirebase-4fc5c.appspot.com",
  messagingSenderId: "579919442488",
  appId: "1:579919442488:web:196ca21250d5b1e3ddeccd",
  measurementId: "G-MPDWX9611N"
});

export default function App() {
  return (
    <div>
      <FirebaseProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Pedido" element={<Order />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="attendants" element={<Attendants />} />
          </Route>
          <Route path="Login" element={<Login />} />
        </Routes>
      </FirebaseProvider>
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

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <CardLogin>
        <Link to="/">
          <Button>Entrar</Button>
        </Link>
      </CardLogin>
    </div>
  );
}
