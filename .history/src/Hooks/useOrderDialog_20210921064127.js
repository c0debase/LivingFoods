import {useState} from 'react';

export function useOrderDialog() {
  const [openOrderDialog, setOpenDialog] = useState();

  return {
    openOrderDialog,
    setOpenOrderDialog
  };
}