import Food from './Food';

export type Order = {
  id: string;
  menu: Food[];
  totalPrice: number;
};

export default Order;
