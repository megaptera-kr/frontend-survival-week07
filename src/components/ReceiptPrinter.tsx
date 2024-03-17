/* eslint-disable operator-linebreak */
import { useNavigate } from 'react-router';

import Button from './common/Button';

import Receipt from '../types/Receipt';

type ReceiptPrintProps = {
  order: Receipt;
};

export default function ReceiptPrint({ order }: ReceiptPrintProps) {
  const { id, menu, totalPrice } = order;
  const navigate = useNavigate();

  const handleClickIntro = () => {
    navigate('/', { replace: true });
  };

  if (!order.id) {
    return <p>Loading.....</p>;
  }

  return (
    <section>
      <div>
        <h2>주문이 완료되었습니다!</h2>
        <p>
          주문번호
          {id}
        </p>
      </div>
      <div>
        <h2>주문목록</h2>
        <ul>
          {menu.map((food) => (
            <li key={food.name}>
              <span>{food.name}</span>
              <span>{`(${food.price.toLocaleString()}원)`}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>{`총 가격 ${totalPrice.toLocaleString()}원`}</div>
      <Button text="메인화면으로 돌아가기" onClick={handleClickIntro} />
    </section>
  );
}
