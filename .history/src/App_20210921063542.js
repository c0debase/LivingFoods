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
import {OrderDialog} from './Order/OrderDialog';

function App() {

  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();

  useTitle({...openFood, ...orders});
  return (
    <>
      <GlobalStyle />
      <OrderDialog />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth}/>
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
