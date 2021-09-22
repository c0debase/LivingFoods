import {useState} from 'react';

export function useQuantity(defaultQuantity) {
  const [value, setValue] = useState(defaultQuantity || 1);
    
  function onChange(e) {
    setValue(e.target.value);
    console.log(e.target.value);
  }

  return {
    value,
    setValue,
    onChange
  }
}