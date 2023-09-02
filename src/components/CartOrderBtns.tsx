type CartOrderBtns = {
  onClickCancelBtn: () => void;
  onClickOrderBtn: () => void;
}

export default function CartOrderBtns({
  onClickCancelBtn,
  onClickOrderBtn,
}: CartOrderBtns) {
  return (
    <div>
      <button type="button" onClick={onClickCancelBtn}>취소</button>
      <button type="button" onClick={onClickOrderBtn}>주문하기</button>
    </div>
  );
}
