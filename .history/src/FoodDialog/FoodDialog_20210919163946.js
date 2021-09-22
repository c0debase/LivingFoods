import React from 'react';
import styled from 'styled-components';
const Dailog = styled.div`

`;

const DailogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: .7;
  z-index: 4;
`;

export function FoodDialog() {
  return <>
    <Dialog>Test Dialog</Dialog>
    <DialogShadow/>
  </>

}