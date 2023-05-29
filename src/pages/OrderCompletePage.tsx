import { Link, useLocation } from 'react-router-dom';
import useFetchOrder from '../hooks/useFetchOrder';
import Food from '../Types/Food';

export default function OrderCompletePage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('orderId');

  //   const { id, menu, totalPrice } = useFetchOrder(orderId);
  const order = useFetchOrder(orderId);
  // id만 넘어오고, 무한 반복되는 상황 발생

  return (
    <>
      <h2>주문이 완료되었습니다!</h2>
      <p>
        주문번호
        {' '}
        {orderId}
      </p>
      <h2>주문목록</h2>
      <ul>
        {/* {
          menu.map(({ id, name, price }: Food, index: number) => (
            <li key={`${id}-${index}`}>
              {name}
              {' '}
              {price.toLocaleString()}
              원
            </li>
          ))
        } */}
      </ul>
      <p>
        총가격
        {' '}
        {/* {totalPrice.toLocaleString()} */}
        원
      </p>
      <Link to="/">
        <button
          type="button"
        >
          메인화면으로 돌아가기
        </button>
      </Link>
    </>
  );
}
