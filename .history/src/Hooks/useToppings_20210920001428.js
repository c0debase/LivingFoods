import {useState} from 'react

export function useToppings(defaultTopping) {
  const [toppings, setToppings] = useState(defaultToppings || getDefaultToppings())

  function checkTopping(index) {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  }

}

const toppingList = [

];

fu

function getDefaultToppings = () => {
  return toppingList.map(topping => ({
    name: topping,
    checked: false
  });
}