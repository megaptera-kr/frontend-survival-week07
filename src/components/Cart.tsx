import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from '../types';
import useCreateOrder from '../hooks/useCreateOrder';
import calculateTotalPrice from '../utils/calculateTotalPrice';

type Props = {
    orderList : Menu[],
    handleDeleteOrder:(index : number)=>void

}

function Cart({ orderList, handleDeleteOrder }:Props) {
  const navigator = useNavigate();
  const createOrder = useCreateOrder();
  const totalPrice = calculateTotalPrice(orderList);

  const handleCancelOrder = () => {
    navigator('/');
  };

  const handleSubmit = async () => {
    const receiptId = await createOrder(orderList, totalPrice);

    if (receiptId) navigator(`/order/complete?orderId=${receiptId}`);
  };

  return (
    <div>
      <p>
        주문 내역
        {' '}
        {orderList.length || 0}
        {' '}
        개
      </p>
      <p>
        총 결제 예상금액
        {' '}
        {totalPrice.toLocaleString()}
        원
      </p>
      {orderList && (
        <ul>
          {orderList.map((order, index) => {
            const key = order.id + index;
            return (
              <li key={key}>
                {order.name}
                {' '}
                {order.price.toLocaleString()}
                <button type="button" onClick={() => handleDeleteOrder(index)}>x</button>
              </li>
            );
          })}
          <li />
        </ul>
      )}
      <div>
        <button type="button" onClick={handleCancelOrder}>취소</button>
        <button type="button" onClick={handleSubmit}>주문하기</button>
      </div>
    </div>
  );
}

export default Cart;
