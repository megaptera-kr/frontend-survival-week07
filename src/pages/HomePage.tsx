import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  const handleClickMove = () => {
    navigate('/order');
  };

  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <button
        type="button"
        onClick={handleClickMove}
      >
        매장 주문
      </button>
      <button
        type="button"
        onClick={handleClickMove}
      >
        전체 포장
      </button>
    </div>
  );
}
