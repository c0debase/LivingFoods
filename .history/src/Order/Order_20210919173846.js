import styled from 'styled-components';
import React from 'react';

const OrderStyled = styled.div`

  position: fixed;
  right: 0px;
  top: 50px;
  width: 340px;
  background-color: white;
  height: 100%;
  border: 1px solid blue;
`;

export function Order() {
  return <OrderStyled></OrderStyled>
}