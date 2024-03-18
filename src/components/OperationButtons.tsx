import Button from './common/Button';

type OperationButtons = {
  handleClickClear: () => void;
  handleClickOrder: () => void;
};
export default function OperationButtons({
  handleClickClear,
  handleClickOrder,
}: OperationButtons) {
  return (
    <div>
      <Button text="취소" onClick={handleClickClear} />
      <Button text="주문하기" onClick={handleClickOrder} />
    </div>
  );
}
