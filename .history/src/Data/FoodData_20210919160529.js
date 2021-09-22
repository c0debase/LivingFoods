export const foodItems = [
  {
    name: 'Smoothie',
    img: '/img/smoothies.jpg',
    section: 'Smoothie'
  },
  {
    name: 'Strawberries',
    img: '/img/strawberries.jpg',
    section: 'Salad'
  },
  {
    name: 'Smoothie',
    img: '/img/smoothies.jpg',
    section: 'Smoothie'
  },
  {
    name: 'Strawberries',
    img: '/img/strawberries.jpg',
    section: 'Salad'
  },
  {
    name: 'Smoothie',
    img: '/img/smoothies.jpg',
    section: 'Smoothie'
  },
  {
    name: 'Strawberries',
    img: '/img/strawberries.jpg',
    section: 'Salad'
  },  
  {
    name: 'Smoothie',
    img: '/img/smoothies.jpg',
    section: 'Smoothie'
  },
  {
    name: 'Strawberries',
    img: '/img/strawberries.jpg',
    section: 'Salad'
  },
  
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]){
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {})