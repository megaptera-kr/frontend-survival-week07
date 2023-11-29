import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/order');
  };

  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <div style={{ display: 'flex', gap: 10 }}>
        <button type="button" onClick={handleClick}>매장 주문</button>
        <button type="button" onClick={handleClick}>전체 포장</button>
      </div>
    </div>
  );
}
