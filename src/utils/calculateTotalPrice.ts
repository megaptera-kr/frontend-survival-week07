import { Menu } from '../types';

const calculateTotalPrice = (cart : Menu[]) : number => cart.reduce(
  (acc, cur) => acc + cur.price
  , 0,
);

export default calculateTotalPrice;
