import React from 'react';

type Props = {
    handleCancelOrder : ()=>void,
    handleSubmit : () =>void
}

function OperationButtons({ handleCancelOrder, handleSubmit }:Props) {
  return (
    <div>
      <button type="button" onClick={handleCancelOrder}>취소</button>
      <button type="button" onClick={handleSubmit}>주문하기</button>
    </div>
  );
}

export default OperationButtons;
