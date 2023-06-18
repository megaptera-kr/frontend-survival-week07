interface OperationButtonsProps{
  onClickOrder: () => void
  onClickCancel: () => void
}

export default function OperationButtons({
  onClickOrder, onClickCancel,
}: OperationButtonsProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onClickCancel}
      >
        취소
      </button>
      <button
        type="button"
        onClick={() => onClickOrder()}
      >
        주문하기
      </button>
    </div>
  );
}
