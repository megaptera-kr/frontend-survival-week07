import _ from 'lodash';

import MenuItem from '../Restaurant/MenuItem';

import Receipt from '../../types/Receipt';

type ReceiptProps = {
    receipt: Receipt;
}

export default function ReceiptPrint({ receipt }: ReceiptProps) {
  if (_.isEmpty(receipt)) {
    return (
      <p>[영수증 나오는 곳]</p>
    );
  }

  const { id, menu, totalPrice } = receipt;

  return (
    <div>
      <h3>영수증</h3>
      <h4>주문번호</h4>
      <p>{id}</p>
      <h4>주문목록</h4>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;
        return <MenuItem key={key} food={food} />;
      })}
      <p>
        총 가격:
        {' '}
        {totalPrice}
        원
      </p>
    </div>
  );
}
