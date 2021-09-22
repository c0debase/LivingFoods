import styled from 'styled-components';
import {Title} from '../Styles/title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;


export const Food = styled(Title)`
  height: 100px;
  padding: 10px;
  background-image: ${({img}) => `url(${img});`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
`;