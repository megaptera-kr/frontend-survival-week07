import { useNavigate, useSearchParams } from 'react-router-dom';

import OrderList from './OrderList';
import OrderHeader from './OrderHeader';
import OrderTotalPrice from './OrderTotalPrice';

import useFetchOrderList from '../../../hooks/useFetchOrderList';

export default function CompletePage() {
  const navigate = useNavigate();

  const [searchParam] = useSearchParams();
  const orderId = searchParam.get('orderId') || undefined;

  const { menu, totalPrice } = useFetchOrderList(orderId);

  const sendToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <OrderHeader orderId={orderId} />
      <div>
        <h2>주문목록</h2>
        <OrderList menus={menu} />
        <OrderTotalPrice totalPrice={totalPrice} />
      </div>
      <button type="button" onClick={sendToHome}>메인화면으로 돌아가기</button>
    </div>
  );
}
