import {useState} from 'react';

export function useQuantity(defaultQuantity) {
  const [value, setValue] = useState(defaultQuantity || 1);
  return {
    value,
    setValue
  }
}