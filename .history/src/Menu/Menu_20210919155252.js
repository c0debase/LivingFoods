import React from 'react';
import styled from 'styled-components';
import {foods} from '../Data/FoodData';
import {Food, FoodGrid} from '../Menu/FoodGrid'

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

export function Menu() {
  return <MenuStyled>
  <FoodGrid>
  <h1>Menu</h1>
    {foods.map((food, index) => (
      <Food img={food.img}>{food.name}</Food>
    ))}
    </FoodGrid>
  </MenuStyled>
}