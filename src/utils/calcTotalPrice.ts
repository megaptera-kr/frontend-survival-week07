import type { Menu } from '../types/restaurants';

export default function calcTotalPrice(cart: Menu[]) {
  return cart.reduce((acc, item) => acc + item.price, 0);
}
