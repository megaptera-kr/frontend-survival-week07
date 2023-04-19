import { useNavigate } from 'react-router-dom';

import MenuItem from './MenuItem';

import useCartStore from '../hooks/useCartStore';
import PATH from '../constants/path';

export default function Cart() {
  const navigate = useNavigate();

  const [snapshot] = useCartStore();
  const { items } = snapshot;

  const totalPrice = items.reduce((acc, food) => acc + (food.price * food.quantity), 0);

  const handleClickOrder = async () => {
    // eslint-disable-next-line no-alert
    if (!items.length) return;

    navigate(PATH.order);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>
        점심 바구니
      </h2>
      <ul style={{ width: '20%' }}>
        {items.map((item, index) => {
          const {
            id, name, price, quantity,
          } = item;
          const food = { id, name, price };

          const key = `${id}-${index}`;

          return (
            <MenuItem
              key={key}
              food={food}
            >
              <span>
                *
                {' '}
                {quantity}
              </span>
            </MenuItem>
          );
        })}
      </ul>
      <button
        type="button"
        aria-label="주문하기"
        disabled={!items.length}
        onClick={handleClickOrder}
      >
        합계:
        {' '}
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}
