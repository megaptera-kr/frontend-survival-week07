import { useEffect } from 'react';
import useCartStore from '../../hook/useCartStore';
import convertKRW from '../../utils/convertKRW';
import getTotalPrice from '../../utils/getTotalPrice';

type ReceiptProps = {
  goToIntro:() => void
}

function Receipt({ goToIntro }:ReceiptProps) {
  const [{ menu }, cartStore] = useCartStore();
  const totalPrice = getTotalPrice(menu);

  // unmount시에는 어떻게 테스트 할 수 있을까? => test 코드에 jest.fn()
  useEffect(() => () => {
    cartStore.clearCart();
  }, []);
  return (
    <div>
      <p>
        주문내역
        {menu.length}
        개
      </p>

      <ul>
        {menu.map((food) => (
          <li key={food.id}>
            <span>{`${food.name} ${convertKRW(food.price)}`}</span>
            <button type="button" onClick={() => cartStore.removeCart(food.id)}>X</button>
          </li>
        ))}
      </ul>

      <p>
        총 결제 예상금액
        {convertKRW(totalPrice)}
      </p>

      <button type="button" onClick={goToIntro}>취소</button>
      <button type="button">주문하기</button>
    </div>
  );
}

export default Receipt;
