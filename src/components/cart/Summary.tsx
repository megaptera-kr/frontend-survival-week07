import Food from '../../types/Food';
import calculateTotalPrice from '../../utils/calculateTotalPrice';

type SummaryProps = {
  selectedMenu: Food[]
}

function Summary({ selectedMenu }: SummaryProps) {
  const totalPrice = calculateTotalPrice(selectedMenu);

  const numOfMenu = selectedMenu.length;

  return (
    <div>
      <div>
        <span>
          주문내역
          {' '}
          {numOfMenu}
          개
        </span>
      </div>
      <div>
        총 결제 예상금액
        {' '}
        {totalPrice}
        원
      </div>
    </div>
  );
}

export default Summary;
