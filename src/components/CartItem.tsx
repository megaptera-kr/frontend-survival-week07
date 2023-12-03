import { Menu } from '../types';

type Props = {
    order : Menu,
    index:number,
    handleDeleteOrder: (index:number) =>void
}

function CartItem({
  order,
  index,
  handleDeleteOrder,
} : Props) {
  return (
    <li>
      {order.name}
      {' '}
      {order.price.toLocaleString()}
      <button type="button" onClick={() => handleDeleteOrder(index)}>x</button>
    </li>
  );
}

export default CartItem;
