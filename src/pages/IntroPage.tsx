import { useNavigate } from 'react-router';

const buttonStyles = {
  padding: '1rem',
  cursor: 'pointer',
};

export default function IntroPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/order');
  };

  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <div>
        <button
          style={buttonStyles}
          type="button"
          onClick={handleClick}
        >
          매장 주문
        </button>
        <button
          style={buttonStyles}
          type="button"
          onClick={handleClick}
        >
          전체 포장
        </button>
      </div>
    </div>
  );
}
