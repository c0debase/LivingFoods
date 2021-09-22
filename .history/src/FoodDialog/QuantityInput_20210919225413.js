import React from 'react';
import styled from 'styled-components';
import {Title} from '../Styles/title';
import {pizzaRed} from '../Styles/colors';

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

const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaRed}
`;

export function QuantityInput({quantity}) {
  return (
    <IncrementContainer>
      <div>Quantity: </div>
      
      <QuantityInputStyled {...quantity}/>
      </IncrementContainer>
  )
}