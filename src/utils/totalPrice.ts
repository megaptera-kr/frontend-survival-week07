import Food from '../types/Food';

export default function totalPrice(menu: Food[]) {
  if (menu) {
    return menu?.reduce((acc, cur) => acc + cur.price, 0);
  }
  return 0;
}
