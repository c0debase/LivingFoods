import React from 'react';
import styled from 'styled-components';
import {FoodLabel} from '../Menu/FoodGrid';

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

const DialogContent = styled.div`

  border: 2px solid blue;

`;

const DialogFooter = styled.div`

  border: 2px solid red;
  height: 60px;

`;


const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: .7;
  z-index: 4;
`;

const DialogBanner = styled.div`

  min-height: 200px;
  margin-bottom: 20px;
  ${({img}) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;

`;
  
const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;


export function FoodDialog({openFood, setOpenFood}) {
  function close() {
    setOpenFood();
  }
  if (!openFood) return null;
  return (
    openFood ? (
    <>
      <DialogShadow onClick={close}/>
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent></DialogContent>
        <DialogFooter></DialogFooter>
      </Dialog>
    </>
  ) : null
  );
}