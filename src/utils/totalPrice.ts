import { Food } from '../types/restaurant';

export default function totalPrice(menu: Food[]) {
  return menu.reduce((curr, food) => curr + food.price, 0);
}
