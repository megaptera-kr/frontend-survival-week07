import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useOrderStore from '../../hooks/useOrderStore';
import GoBackHomeButton from './GoBackHomeButton';

export default function OrderContainer() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [{ order }, store] = useOrderStore();

  useEffect(() => {
    if (orderId) {
      store.fetchOrders(orderId);
    }
  }, [orderId]);
  return order ? (
    <section>
      <h2 className="font-extrabold text-3xl">주문이 완료되었습니다!</h2>
      <h3 className="font-extrabold text-2xl my-4">
        주문번호:
        {' '}
        {order?.id}
      </h3>
      <h3 className="font-extrabold text-2xl my-4">주문목록</h3>
      <ul className="w-1/2 flex flex-col justify-center items-center gap-4 p-4 border-2 border-purple-300 mt-8 mx-auto font-bold text-2xl mb-8">
        {order?.menu.map((menu) => (
          <li
            className="font-extrabold text-lg"
            key={menu.id}
          >
            {`${menu.name} ${menu.price.toLocaleString()}원`}
          </li>
        ))}
      </ul>
      <GoBackHomeButton
        name="메인화면으로 돌아가기"
        handleClickGoHome={() => navigate('/')}
      />
    </section>
  ) : (
    <section>
      주문완료 내역을 조회중 입니다.
    </section>
  );
}
