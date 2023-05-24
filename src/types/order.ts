import { Menu } from './restaurant';

export type Order = {
  id: string;
  menu: Menu[];
  totalPrice: number;
};

export type OrderData = {
  order: Order;
}
