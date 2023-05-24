import { Order } from './order';

export type OrderMenu = Pick<Order, 'menu' | 'totalPrice'>;

export type Response = {
  id: string;
}
