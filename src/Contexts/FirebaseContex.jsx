import React, { createContext, useState, useEffect } from "react";

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

const firebaseApp = initializeApp({
  apiKey: "AIzaSyArlrMtCj8XXKONRtG6_crV5467eumsbNA",
  authDomain: "reactfirebase-4fc5c.firebaseapp.com",
  projectId: "reactfirebase-4fc5c",
  storageBucket: "reactfirebase-4fc5c.appspot.com",
  messagingSenderId: "579919442488",
  appId: "1:579919442488:web:196ca21250d5b1e3ddeccd",
  measurementId: "G-MPDWX9611N"
});

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [commands, setCommands] = useState([]);

  const db = getFirestore();
  const useCollectionRef = collection(db, "users");
  const productCollectionRef = collection(db, "products");
  const commandCollectionRef = collection(db, "commandClient");

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

  async function createUser(name, email) {
    const user = await addDoc(useCollectionRef, {
      name,
      email
    });
  }

  async function createCommand(
    productId,
    productName,
    productPrice,
    productDescription,
    productImage
  ) {
    const command = await addDoc(commandCollectionRef, {
      items: {
        ImageProduct: productImage,
        idProduct: productId,
        nameProduct: productName,
        price: productPrice
      }
    });
  }

  async function deleteUser(id) {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  return (
    <FirebaseContext.Provider
      value={{
        users,
        products,
        commands,
        createUser,
        deleteUser,
        createCommand
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
