import React, {useState} from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from "./Navbar/Navbar";
import {Banner} from './Banner/Banner';
import {Menu} from './Menu/Menu';
import {GlobalStyle} from './Styles/GlobalStyle'
import {FoodDialog} from './FoodDialog/FoodDialog';
function App() {

  const [openFood, setOpenFood] = useState();

  return (
    <>
      <GlobalStyle />
      <FoodDialog />
      <Navbar />
      <Banner />
      <div>{openFood}</div>
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
