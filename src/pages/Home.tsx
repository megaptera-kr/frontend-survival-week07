import { useNavigate } from 'react-router';

export default function Home() {
  const navigator = useNavigate();

  const handleChangePage = () => {
    navigator('/order');
  };

  return (
    <div>
      <h2>원하시는 주문을 터치해주세요.</h2>
      <button type="button" onClick={handleChangePage}>매장 주문</button>
      <button type="button" onClick={handleChangePage}>전체 포장</button>
    </div>
  );
}
