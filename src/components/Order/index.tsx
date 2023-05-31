import _ from 'lodash';

import ReceiptPrint from '../Receipt/ReceiptPrinter';
import Message from './Message';

import useFetchOrder from '../../hooks/useFetchOrder';

type OrderProps = {
    orderId: string;
    onClickBack: () => void;
}

export default function Order({
  orderId, onClickBack,
}: OrderProps) {
  const order = useFetchOrder({ orderId });

  return (
    <div>
      <Message order={order} />
      {!_.isEmpty(order) ? (
        <ReceiptPrint receipt={order} />
      ) : null}
      <button type="button" onClick={onClickBack}>
        메인화면으로 돌아가기
      </button>
    </div>
  );
}
