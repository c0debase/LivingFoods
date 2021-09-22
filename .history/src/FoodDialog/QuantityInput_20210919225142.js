import React from 'react';
import styled from 'styled-components';


const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 20px;
  text-align: center;
  border: none;
  outline: none;
`;

const IncrementContainer = styled.div`
  display: flex;
  height: 24px;

`;

export function QuantityInput({quantity}) {
  return (
    <IncrementContainer>
      <div>Quantity: </div>
      
      <QuantityInputStyled {...quantity}/>
      </IncrementContainer>
  )
}