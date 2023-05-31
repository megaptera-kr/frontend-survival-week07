import { useNavigate } from 'react-router';
import ReceiptMenu from '../components/ReceiptMenu';
import useStore from '../hooks/useStore';
import Food from '../types/Food';

export default function ReceiptPage() {
  const store = useStore();
  const navigate = useNavigate();
  const receipt = JSON.parse(store.state.Receipt);
  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>
      <p>
        주문번호
        {receipt.id}
      </p>
      <h2>주문목록</h2>
      {
        (receipt.menu).map((food:Food, index:number) => {
          const key = `${food.id}-${index}`;
          return (
            <ReceiptMenu key={key} menu={food} />
          );
        })
      }
      <p>
        {'총가격 '}
        {receipt.totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
        원

      </p>
      <button type="button" onClick={() => { navigate('/'); }}>메인화면으로 돌아가기</button>
    </div>
  );
}
