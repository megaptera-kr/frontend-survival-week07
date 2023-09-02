import { useSearchParams, useNavigate } from 'react-router-dom';

import useCartStore from '../../../hooks/useCartStore';
import useFetchOrder from '../../../hooks/useFetchOrder';

import Food from '../../../types/Food';

export default function CompletePage() {
  const navigate = useNavigate();
  const [, store] = useCartStore();
  const [searchParams] = useSearchParams();

  const orderId = searchParams.get('orderId');

  const handleCancel = () => {
    store.clearMenu();
    navigate('/');
  };

  if (!orderId) {
    return <div>no result</div>;
  }

  const { id, menu, totalPrice }:any = useFetchOrder(orderId);

  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>
      <div>
        <span>
          주문번호
          {id}
        </span>
      </div>
      <h2>주문목록</h2>
      <ul>
        {menu?.map((food:Food) => (
          <li key={food.id}>
            <span>{food.name}</span>
            <span>
              {food.price.toLocaleString()}
              원
            </span>
          </li>
        ))}
      </ul>
      <div>
        <span>
          총가격
          {totalPrice?.toLocaleString()}
          {' '}
          원
        </span>
      </div>
      <button type="button" onClick={handleCancel}>메인화면으로 돌아가기</button>
    </div>
  );
}
