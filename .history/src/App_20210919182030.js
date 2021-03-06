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
function App() {

  const openFood = useOpenFood();

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood}/>
      <Navbar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
