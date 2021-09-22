import React from 'react';
import styled from 'styled-components';
import {pizzaRed} from '../Styles/colors';

export const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
`

export function Navbar(){
  return <NavbarStyled>
    Hello navbar
  </NavbarStyled>
}