import _ from 'lodash';

import useFetchOrder from '../../hooks/useFetchOreder';

import Receipt from '../../types/Receipt';

type ReceiptProps = {
  orderId: string;
};

export default function Receipt({ orderId }: ReceiptProps) {
  const order = useFetchOrder({ orderId });
  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>
      {!_.isEmpty(order) ? (
        <div>
          <p>
            주문번호
            {order.id}
          </p>
          <h2>주문목록</h2>
          <ul>
            {order.menu?.length
              && order.menu.map((food) => (
                <li key={food.id}>
                  {food.name}
                  {' '}
                  {food.price.toLocaleString()}
                  원
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
