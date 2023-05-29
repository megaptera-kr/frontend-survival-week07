import Food from '../Types/Food';
import useFetchOrder from '../hooks/useFetchOrder';

type OrderProps = {
    orderId: string,
    handleClickBack: () => void

}

export default function Order({
  orderId, handleClickBack,
}: OrderProps) {
  const { menu, totalPrice } = useFetchOrder(orderId);

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
        { menu
          && menu.map(({ id, name, price }: Food, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${id}-${index}`}>
              {name}
              {' '}
              {price.toLocaleString()}
              원
            </li>
          ))}
      </ul>
      <p>
        총가격
        {' '}
        {totalPrice && totalPrice.toLocaleString()}
        원
      </p>
      <button
        type="button"
        onClick={handleClickBack}
      >
        메인화면으로 돌아가기
      </button>
    </>
  );
}
