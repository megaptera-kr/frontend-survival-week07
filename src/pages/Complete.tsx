import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetchReceipt from '../hooks/useGetReceipt';
import totalPrice from '../utils/totalPrice';
import type Food from '../types/Food';

export default function Complete() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const receiptContent = useFetchReceipt(orderId || '');
  const calcTotalPrice = totalPrice(receiptContent.menu);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>
      <p>
        주문번호
        {' '}
        {receiptContent.id}
      </p>
      <h2>주문목록</h2>
      <ul>
        {receiptContent.menu?.map((menu: Food) => (
          <li key={menu.id}>{`${menu.name}${menu.price.toLocaleString()}원`}</li>
        ))}
      </ul>
      <p>
        {`총가격 ${calcTotalPrice.toLocaleString()}원`}
      </p>
      <button type="button" onClick={handleClick}>메인화면으로 돌아가기</button>
    </div>
  );
}
