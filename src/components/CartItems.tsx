import CartItem from './CartItem';

import CartItemModel from '../models/CartItemModel';

type CarrItemsProps = {
  cartItems: CartItemModel[];
};

export default function CartItems({ cartItems }: CarrItemsProps) {
  if (!cartItems.length) {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: '1rem',
          justifyContent: 'center',
        }}
      >
        <i>선택한 메뉴가 없습니다.</i>
      </div>
    );
  }

  return (
    <>
      {cartItems.map((item: CartItemModel) => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
}
