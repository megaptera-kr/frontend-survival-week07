import _ from 'lodash';

import useFetchOrder from '../hooks/useFetchOrder';
import Message from './Message';
import OrderMenu from './OrderMenu';

type OrderProps = {
  orderId: string;
  onClick: () => void;
}

export default function Order({
  orderId, onClick,
}: OrderProps) {
  const order = useFetchOrder({ orderId });

  return (
    <div>
      <Message order={order} />
      {!_.isEmpty(order) ? (
        <OrderMenu order={order} />
      ) : null}
      <button type="button" onClick={onClick}>
        메인 화면으로 돌아가기
      </button>
    </div>
  );
}
