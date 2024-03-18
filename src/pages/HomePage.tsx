import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const sendToOrder = () => {
    navigate('/order');
  };
  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <div>
        <button type="button" style={{ padding: '1rem', cursor: 'pointer' }} onClick={sendToOrder}>매장 주문</button>
        <button type="button" style={{ padding: '1rem', cursor: 'pointer' }} onClick={sendToOrder}>전체 포장</button>
      </div>
    </div>
  );
}
