import useCartStore from '../hooks/useCartStore';

import CartItemModel from '../models/CartItemModel';

type CartItemProps = {
  item: CartItemModel;
};

export default function CartItem({ item }: CartItemProps) {
  const [, cartStore] = useCartStore();

  const handleClick = () => {
    cartStore.deleteItem(item.menuId);
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div>{item.menuName}</div>
      <div>{item.quantity}개</div>
      <div>{item.priceFormatted()}원</div>
      <div>
        <button
          type='button'
          style={{ fontSize: '0.8rem', minWidth: '100px' }}
          onClick={handleClick}
        >
          X
        </button>
      </div>
    </div>
  );
}
