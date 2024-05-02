import { useNavigate } from 'react-router';

function IntroPage() {
  const navigate = useNavigate();
  const goToOrder = () => navigate('order');
  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <button type="button" onClick={goToOrder}>매장 주문</button>
      <button type="button" onClick={goToOrder}>전체 포장</button>
    </div>
  );
}

export default IntroPage;
