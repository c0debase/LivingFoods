import {useEffect} from 'react';

export function useTitle({openFood, orders}) {
  useEffect(() => {
    if(openFood) {
      document.title = openFood.name;
    } else {
      document.title = `What's for dinner?`;
    }
  });
}