import {useState} from 'react

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

const toppingList = [
  "pepperoni",
  "kakashki",
  "bukashki",
  "kazavki"
];

fu

function getDefaultToppings = () => {
  return toppingList.map(topping => ({
    name: topping,
    checked: false
  });
}