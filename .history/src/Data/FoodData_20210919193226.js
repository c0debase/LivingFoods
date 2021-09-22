export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export const foodItems = [
  {
    name: 'Smoothie',
    img: '/img/smoothies.jpg',
    section: 'Smoothie',
    price: 8
  },
  {
    name: 'Strawberries',
    img: '/img/strawberries.jpg',
    section: 'Salad',
    price: 8
  },
  {
    name: 'Smoothie',
    img: '/img/smoothies.jpg',
    section: 'Smoothie',
    price: 8
  },
  {
    name: 'Strawberries',
    img: '/img/strawberries.jpg',
    section: 'Salad',
    price: 8
  },
  {
    name: 'Smoothie',
    img: '/img/smoothies.jpg',
    section: 'Smoothie',
    price: 8
  },
  {
    name: 'Strawberries',
    img: '/img/strawberries.jpg',
    section: 'Salad',
    price: 8
  },  
  {
    name: 'Smoothie',
    img: '/img/smoothies.jpg',
    section: 'Smoothie',
    price: 8
  },
  {
    name: 'Strawberries',
    img: '/img/strawberries.jpg',
    section: 'Salad',
    price: 8
  },
  
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]){
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {})