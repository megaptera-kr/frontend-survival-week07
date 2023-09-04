import { useSearchParams } from 'react-router-dom';

import useFetchOrder from '../hooks/useFetchOrder';

import OrderMenu from '../components/OrderMenu';
import NavigationButton from '../components/NavigationButton';

export default function OrderCompletePage() {
  const [searchParams] = useSearchParams();

  const orderId = searchParams.get('orderId') || '';
  const orderData = useFetchOrder(orderId);

  return (
    <div>
      <div>
        <h2>주문이 완료되었습니다!</h2>
        <p>
          주문 번호:
          {' '}
          {orderId}
        </p>
      </div>
      {orderData && <OrderMenu menu={orderData.menu} />}
      <div>
        <NavigationButton path="/">메인화면으로 돌아가기</NavigationButton>
      </div>
    </div>
  );
}
