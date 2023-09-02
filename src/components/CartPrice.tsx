import { Menu } from '../types/restaurants';
import calcTotalPrice from '../utils/calcTotalPrice';

type PriceProps = {
  cartMenu: Menu[];
}

export default function CartPrice({ cartMenu }: PriceProps) {
  const totalPrice = calcTotalPrice(cartMenu);
  const totalCount = cartMenu.length;

  return (
    <div>
      <div>{`주문내역 ${totalCount}개`}</div>
      <div>{`총 결제 예상금액 ${totalPrice.toLocaleString()}원`}</div>
    </div>
  );
}
