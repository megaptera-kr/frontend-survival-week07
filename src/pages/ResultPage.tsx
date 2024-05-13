import { useLocation, useNavigate } from 'react-router-dom';
import { Orders } from '../components';
import useFetchOrder from '../hook/useFetchOrder';

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

      <Orders order={order} />

      <button type="button" onClick={goToIntro}>메인화면으로 돌아가기</button>
    </div>
  );
}

export default ResultPage;
