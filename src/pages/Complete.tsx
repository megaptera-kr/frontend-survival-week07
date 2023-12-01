import { useSearchParams, useNavigate } from 'react-router-dom';
import useFetchOrderDetail from '../hooks/useFetchOrderDetail';

function Complete() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const data = useFetchOrderDetail(orderId as string);

  const handleGoToMain = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>

      {data && (
        <>
          <p>
            주문 번호
            {' '}
            {data.id}
          </p>
          <h2>주문목록</h2>
          <ul>
            {data.menu.map((food, index) => {
              const key = food.id + index;
              return (
                <li key={key}>
                  {food.name}
                  {' '}
                  {food.price.toLocaleString()}
                  원
                </li>
              );
            })}
          </ul>
          <p>
            총가격
            {' '}
            {data.totalPrice.toLocaleString()}
            원
          </p>
        </>
      )}

      <button type="button" onClick={handleGoToMain}>메인화면으로 돌아가기</button>
    </div>
  );
}

export default Complete;
