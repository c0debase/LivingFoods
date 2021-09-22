import React from 'react';
import styled from 'styled-components';


const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 20px;
  text-align: center;
  border: none;
  outline: none;
`;

export function QuantityInput({quantity}) {
  return (
    <div>
      <div>Quantity: </div>
      <QuantityInputStyled {...quantity}/>
    </div>
  )
}