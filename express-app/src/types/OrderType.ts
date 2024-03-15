import { OrderStatus } from './OrderStatusType';
import { OrderKind } from './OrderKindType';
import CartItem from './CartItemType';

type Order = {
  id: string;
  orderKind: OrderKind;
  price: number;
  status: OrderStatus;
  menuItems: CartItem[];
  createAt: Date;
  updateAt: Date;
};

export default Order;
