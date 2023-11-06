import Food from '../types/Food';

export default function calculateTotalPrice(menu: Food[]) {
  return menu.reduceRight((acc, cur) => acc + cur.price, 0);
}
