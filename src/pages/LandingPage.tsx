import { useNavigate } from 'react-router';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/order');
  };

  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <button
        type="button"
        style={{ padding: '1rem', cursor: 'pointer' }}
        onClick={handleClick}
      >
        매장 주문
      </button>
      <button
        type="button"
        style={{ padding: '1rem', cursor: 'pointer' }}
        onClick={handleClick}
      >
        포장 주문
      </button>
    </div>
  );
}
