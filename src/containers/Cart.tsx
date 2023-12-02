import { Menu } from '../../types';
import MenuItem from '../components/MenuItem';
import useStore, { useSelector } from '../hooks/useStore';
import { payment } from '../reducers/domainReducer';
import { deleteCart, getTotalPrice } from '../reducers/uiReducer';

export const testFn = () => {};

function Cart() {
  // const { cart, handleRemoveCart } = useCartStorage();

  // const { payment } = useFetchOrders();

  // const receiptData = createReceiptData(cart);

  const { dispatch } = useStore();
  const cart = useSelector((state) => state.ui.cart);
  const totalPrice = useSelector(getTotalPrice);

  const handlePayment = () => {
    dispatch(payment());
  };

  const handleDeleteMenu = ({ menuItem }: { menuItem: Menu }) => {
    dispatch(deleteCart(menuItem));
  };

  return (
    <article data-testid="Cart">
      <h2>점심 바구니</h2>
      <ul>
        {cart.map((menu, index) => (
          <li data-testid="CartItem" key={`${menu.id}_${index}`}>
            <MenuItem
              menuItem={menu}
              index={index}
              btnLabel="취소"
              onClick={handleDeleteMenu}
            />
          </li>
        ))}
      </ul>
      <button data-testid="Payment" type="button" onClick={handlePayment} disabled={!cart.length}>
        {`합계: ${totalPrice.toLocaleString()}원 주문`}
      </button>
    </article>
  );
}

export default Cart;
