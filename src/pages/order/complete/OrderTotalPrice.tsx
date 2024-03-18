export default function OrderTotalPrice({ totalPrice } : {totalPrice: number}) {
  return (
    <div>
      <span>
        총가격
        {' '}
        {totalPrice.toLocaleString()}
        원
      </span>
    </div>
  );
}
