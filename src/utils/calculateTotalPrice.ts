import Food from '../types/Food';

export default function calculateTotalPrice(menu :Food[]) {
  return menu.reduce((acc, food) => acc + food.price, 0);
}
