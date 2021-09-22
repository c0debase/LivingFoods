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
import {useAuthentication} from './Hooks/useAuthentication';

import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { Database } from 'firebase/database';

  var config = {
    apiKey: "AIzaSyCwOjGfREUYAvBS0igtPnmmwZwfNcEWtk4",
    authDomain: "eatlivecells.firebaseapp.com",
    databaseURL: "https://eatlivecells-default-rtdb.firebaseio.com/",
    storageBucket: "eatlivecells.appspot.com"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

function App() {

  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();

  useTitle({...openFood, ...orders});
  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth}/>
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
