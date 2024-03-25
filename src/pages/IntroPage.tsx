import { useNavigate } from 'react-router';

function IntroPage() {
  const navigate = useNavigate();

  const handleClickNavigateOrderPage = () => {
    navigate('/order');
  };

  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <button
        type="button"
        style={{ padding: '1rem', cursor: 'pointer' }}
        onClick={handleClickNavigateOrderPage}
      >
        매장 주문
      </button>
      <button
        type="button"
        style={{ padding: '1rem', cursor: 'pointer' }}
        onClick={handleClickNavigateOrderPage}
      >
        전체 포장
      </button>
    </div>
  );
}

export default IntroPage;
