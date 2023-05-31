import { Order } from '../src/types/order';
import foods from './foods';

const order:Order = {
  id: '12345678910',
  menu: foods,
  totalPrice: foods.reduce((acc, cur) => acc + cur.price, 0),
};

export default order;
