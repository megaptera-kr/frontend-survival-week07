type ReceiptProps = {
  goToIntro:() => void
}

function Receipt({ goToIntro }:ReceiptProps) {
  return (
    <div>
      <p>주문내역 0개</p>
      {/* 주문리스트 */}
      <p>총 결제 예상금액 0원</p>

      <button type="button" onClick={goToIntro}>취소</button>
      <button type="button">주문하기</button>
    </div>
  );
}

export default Receipt;
