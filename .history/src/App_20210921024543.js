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
import {}
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyCwOjGfREUYAvBS0igtPnmmwZwfNcEWtk4",
    authDomain: "eatlivecells.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://eatlivecells-default-rtdb.firebaseio.com/",
    storageBucket: "eatlivecells.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
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
