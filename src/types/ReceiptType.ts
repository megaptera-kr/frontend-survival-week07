import CartItemModel from '../models/CartItemModel';
import OrderKindType from './OrderKindType';
import { OrderStatusType } from './OrderStatusType';

type ReceiptType = {
  id: string;
  orderKind: OrderKindType;
  totalPrice: number;
  status: OrderStatusType;
  menuItems: CartItemModel[];
  createAt: Date;
  updateAt: Date;
};

export default ReceiptType;
