import { Food } from '../../types/food';

function getTotalPrice(menu:Food[]) {
  return menu.reduce((acc, food) => acc + food.price, 0);
}

export default getTotalPrice;
