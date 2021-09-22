import styled from 'styled-components';
import React from 'react';

const OrderStyled = styled.div`

  position: fixed;
  right: 0px;
  top: 50px;
  width: 340px;
  
`;

export function Order() {
  return <OrderStyled></OrderStyled>
}