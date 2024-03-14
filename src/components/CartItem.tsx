import CartItemModel from '../models/CartItemModel';

type CartItemProps = {
  item: CartItemModel;
};

export default function CartItem({ item }: CartItemProps) {
  return <div>{item.menuName}</div>;
}
