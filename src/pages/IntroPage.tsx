import { useNavigate } from 'react-router';

export default function IntroPage() {
  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate('/order');
  };

  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <div>
        <button
          type="button"
          onClick={handleClickNext}
        >
          매장 주문
        </button>
        <button
          type="button"
          onClick={handleClickNext}
        >
          전체 포장
        </button>
      </div>
    </div>
  );
}
