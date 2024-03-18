type OrderHeaderProps = {
orderId: string | undefined;
};

export default function OrderHeader({ orderId } : OrderHeaderProps) {
  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>
      <p>
        주문번호
        {' '}
        {orderId}
      </p>
    </div>
  );
}
