import {useState} from 'react';

export function useToppings(defaultTopping) {
  const [toppings, setToppings] = useState(defaultToppings || getDefaultToppings())

  function checkTopping(index) {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  }

  return {
    checkTopping,
    toppings
  }

}

const toppingsList = [
  "pepperoni",
  "kakashki",
  "bukashki",
  "kazavki"
];


 getDefaultToppings = () => {
  return toppingsList.map(topping => ({
    name: topping,
    checked: false
  }));
}