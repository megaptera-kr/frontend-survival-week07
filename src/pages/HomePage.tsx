import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/order');
  };

  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <div>
        <button
          type="button"
          onClick={handleClick}
          style={{
            padding: '1rem',
            cursor: 'pointer',
          }}
        >
          매장 주문
        </button>
        <button
          type="button"
          onClick={handleClick}
          style={{
            padding: '1rem',
            cursor: 'pointer',
          }}
        >
          전체 포장
        </button>
      </div>
    </div>
  );
}
