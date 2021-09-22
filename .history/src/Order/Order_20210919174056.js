import styled from 'styled-components';
import React from 'react';

const OrderStyled = styled.div`

  position: fixed;
  right: 0px;
  top: 50px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  box-shadow: 0px 0px 5px 5px grey;
  z-index: 10;
`;

export function Order() {
  return <OrderStyled>Your order's like your stomach is pretty empty</OrderStyled>
}