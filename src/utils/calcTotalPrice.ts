import storeGetSelectedFood from './storeGetSelectedFood';

export default function calcTotalPrice() {
  const selectedFood = storeGetSelectedFood();
  const totalPrice = selectedFood.reduce((acc, cur) => (
    acc + cur.price
  ), 0);
  return totalPrice;
}
