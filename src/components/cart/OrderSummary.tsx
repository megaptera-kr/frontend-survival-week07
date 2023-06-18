interface OrderSummaryProps {
  count: number;
  totalPrice: number;
}

export default function OrderSummary({
  count, totalPrice,
}: OrderSummaryProps) {
  return (
    <div>
      <p>
        주문내역
        {' '}
        {count}
        개
      </p>
      <p>
        총 결제 예상금액
        {' '}
        {totalPrice.toLocaleString()}
        원
      </p>
    </div>
  );
}
