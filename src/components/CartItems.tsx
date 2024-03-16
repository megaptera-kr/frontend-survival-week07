import { HTMLAttributes } from 'react';
import CartItem from './CartItem';

import CartItemModel from '../models/CartItemModel';

type CartItems = {
  cartItems: CartItemModel[];
  pageId: string;
} & HTMLAttributes<Element>;

export default function CartItems({ cartItems, pageId, children }: CartItems) {
  if (!cartItems.length) {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: '1rem',
          justifyContent: 'center',
        }}
      >
        {pageId === 'order-detail' ? (
          <i>선택한 메뉴가 없습니다</i>
        ) : (
          <i>주문 메뉴가 없습니다</i>
        )}
      </div>
    );
  }

  return (
    <>
      {cartItems.map((item: CartItemModel) => (
        <CartItem key={item.id} item={item} pageId={pageId} />
      ))}
      <div>{children}</div>
    </>
  );
}
