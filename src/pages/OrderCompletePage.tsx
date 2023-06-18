import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetchOrderInfo from '../hooks/useFetchOrderInfo';

const key = (index: number, text: string) => `${index}-${text}`;

export default function OrderCompletePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const orderId = searchParams.get('orderId');

  const handleClick = () => {
    navigate('/');
  };

  if (!orderId) {
    return (
      <div>
        <p>주문에 실패했습니다. 다시 시도해주세요.</p>
        <button
          type="button"
          onClick={handleClick}
        >
          메인화면으로 돌아가기
        </button>
      </div>
    );
  }

  const order = useFetchOrderInfo(orderId);

  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>
      <p>
        주문번호
        {' '}
        {orderId}
      </p>
      {order ? (
        <>
          <h2>주문목록</h2>
          <ul>
            {order.menu && order.menu.map((food, index) => (
              <li key={key(index, food.name)}>
                {food.name}
                {' '}
                (
                {food.price.toLocaleString()}
                원)
              </li>
            ))}
          </ul>
          <p>
            총가격
            {' '}
            {order.totalPrice}
            원
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <button
        type="button"
        onClick={handleClick}
      >
        메인화면으로 돌아가기
      </button>
    </div>
  );
}
