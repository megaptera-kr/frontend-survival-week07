import CartItem from './CartItemType';

type Order = {
  orderKind: string;
  totalItemNum: number;
  totalPrice: number;
  menuItems: CartItem[];
};

export default Order;
