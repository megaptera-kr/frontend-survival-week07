import CartItem from './CartItemType';

type Receipt = {
  id: string;
  orderKind: string;
  totalPrice: number;
  menuItems: CartItem[];
};

export default Receipt;
