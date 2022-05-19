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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [commands, setCommands] = useState([]);

  const db = getFirestore();
  const useCollectionRef = collection(db, "users");
  const productCollectionRef = collection(db, "products");
  const commandCollectionRef = collection(db, "commandClient");

  async function createUser() {
    const user = await addDoc(useCollectionRef, {
      name,
      email
    });
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(useCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCommands = async () => {
      const data = await getDocs(commandCollectionRef);
      setCommands(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCommands();
  }, []);

  async function deleteUser(id) {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home products={products} />} />
          <Route path="Pedido" element={<Order commands={commands} />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="attendants"
            element={
              <Attendants
                name={name}
                email={email}
                users={users}
                setName={setName}
                setEmail={setEmail}
                deleteUser={deleteUser}
                createUser={createUser}
              />
            }
          />
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

function Home({ products }) {
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
}

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
