import React from 'react';
import styled from 'styled-components';


const QuantityInputStyled = styled.input`
  font-size: 18px;
`;

export function QuantityInput({quantity}) {
  return (
    <div>
      <div>Quantity: </div>
      <QuantityInputStyled {...quantity}/>
    </div>
  )
}