type OrderMessageProps = {
    orderId : string
}

export default function OrderMessage({ orderId }:OrderMessageProps) {
  return (
    <>
      <h2>주문이 완료되었습니다!</h2>
      <p>
        주문번호
        {' '}
        {orderId}
      </p>
    </>
  );
}
