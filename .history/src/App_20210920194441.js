import React, {useState} from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from "./Navbar/Navbar";
import {Banner} from './Banner/Banner';
import {Menu} from './Menu/Menu';
import {GlobalStyle} from './Styles/GlobalStyle'
import {FoodDialog} from './FoodDialog/FoodDialog';
import {Order} from './Order/Order';
import {useOpenFood} from './Hooks/useOpenFood';
import {useOrders} from './Hooks/useOrders';
import {useTitle} from './Hooks/useTitle';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();

function App() {

  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({...openFood, ...orders});
  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} {...openFood}/>
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
