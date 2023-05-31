import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  const dineInOrderClick = () => {
    navigate('/order');
  };

  const takOutOrderClick = () => {
    navigate('/order');
  };

  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <span>
        <button type="button" onClick={dineInOrderClick}>매장 주문</button>
        <button type="button" onClick={takOutOrderClick}>전체 포장</button>
      </span>
    </div>
  );
}
