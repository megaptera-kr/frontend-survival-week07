import CartItem from './CartItemType';
import { OrderKind } from './OrderKindType';

type OrderRequest = {
  orderKind: OrderKind;
  totalItemNum: number;
  totalPrice: number;
  menuItems: CartItem[];
};

export default OrderRequest;
