import { useSearchParams, useNavigate } from 'react-router-dom';
import useFetchOrder from '../hooks/useFetchOrder';
import { Order } from '../types/restaurants';

export default function Order() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId') as string;
  const { order } = useFetchOrder(orderId);

  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>
      <p>{`주문번호 ${orderId}`}</p>
      <div>
        <h2>주문목록</h2>
        {!order && <span>로딩 중</span>}
        {order && (
          <>
            <ul>
              {order?.menu.map((item, idx) => {
                const key = `${item.id}-${idx}`;
                return (
                  <li key={key} style={{ marginBottom: '1rem' }}>
                    {`${item.name}${item.price.toLocaleString()}원`}
                  </li>
                );
              })}
            </ul>
            <p>{`총 가격 ${order.totalPrice.toLocaleString()}원`}</p>
          </>
        )}
      </div>
      <button type="button" onClick={() => navigate({ pathname: '/' })}>메인화면으로 돌아가기</button>
    </div>
  );
}
