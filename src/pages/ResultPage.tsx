import { useLocation, useNavigate } from 'react-router-dom';
import useFetchOrder from '../hook/useFetchOrder';
import convertKRW from '../utils/convertKRW';

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [, id] = location.search.split('=');

  const order = useFetchOrder(id);

  const goToIntro = () => navigate('/');

  if (!order) {
    return null;
  }

  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>
      <p>
        {`주문번호 ${order.id}`}
      </p>

      <h3>주문목록</h3>
      <ul>
        {order.menu.map((food) => (
          <li
            key={food.id}
          >
            {`${food.name} ${convertKRW(food.price)}`}
          </li>
        ))}
      </ul>

      <p>{`총가격 ${convertKRW(order.totalPrice)}`}</p>
      <button type="button" onClick={goToIntro}>메인화면으로 돌아가기</button>
    </div>
  );
}

export default ResultPage;
