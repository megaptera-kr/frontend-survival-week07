import Food from '../types/Food';

import calculateTotalPrice from '../utils/calculateTotalPrice';

type SummaryProps = {
  selectedMenu: Food[];
};

export default function Summary({ selectedMenu }: SummaryProps) {
  const totalPrice = calculateTotalPrice(selectedMenu);
  return (
    <div>
      <p>{`주문내역 ${selectedMenu.length}개`}</p>
      <p>{`총 결제 예상금액 ${totalPrice.toLocaleString()}원`}</p>
    </div>
  );
}
