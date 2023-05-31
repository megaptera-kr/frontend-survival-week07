import { useNavigate } from 'react-router';

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>원하시는 주문을 터치해주세요.</h2>
      <button type="button" onClick={() => navigate('/order')}>
        매장 주문
      </button>
      <button type="button" onClick={() => navigate('/order')}>
        전체 포장
      </button>
    </div>
  );
}
