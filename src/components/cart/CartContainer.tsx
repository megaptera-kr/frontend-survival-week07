import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../hooks/useCartStore';
import ButtonContainer from './ButtonContainer';
import Cart from './Cart';

export default function CartContainer() {
  const navigate = useNavigate();
  const [{ totalOrderCount, totalPrice, orderId }, store] = useCartStore();

  useEffect(() => {
    if (orderId !== '') {
      navigate(`/order/complete?orderId=${orderId}`);
      store.initOrderId();
    }
  }, [orderId]);

  return (
    <div className="w-1/2 mx-auto mt-8">
      <div className="w-full flex justify-evenly ">
        <p className="font-bold text-xl">
          주문 내역
          {' '}
          {totalOrderCount}
          개
        </p>
        <p className="font-bold text-xl">
          총 결제 예상금액
          {' '}
          {totalPrice.toLocaleString()}
          원
        </p>
      </div>
      <Cart />
      <ButtonContainer />
    </div>
  );
}
