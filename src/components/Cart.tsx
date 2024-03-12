function Cart() {
  return (
    <section>
      <p>주문내역 0개</p>
      <p>총 결제 예상금액 0원</p>
      <div>
        <span>짜장면</span>
        <span>8,000원</span>
        <button type='button'>X</button>
      </div>
      <div>
        <button type='button'>취소</button>
        <button type='button'>주문하기</button>
      </div>
    </section>
  );
}

export default Cart;
