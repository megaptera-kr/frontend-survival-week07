import { useNavigate } from 'react-router-dom';

import MenuItem from '../components/MenuItem';

import useCartStore from '../hooks/useCartStore';

export default function Order() {
  const navigate = useNavigate();
  const [snapshot, cartStore] = useCartStore();
  const { items } = snapshot;

  const handleClickOrder = () => {
    cartStore.order();
    navigate('/orderComplete');
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h1>
        이대로 주문하시겠습니까?
      </h1>

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
        onClick={handleClickOrder}
      >
        결제
      </button>
    </div>
  );
}
