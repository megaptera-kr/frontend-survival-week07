import { Menu } from './restaurants';

export interface Order {
  id: string,
  menu: Menu[],
  totalPrice: number,
}
