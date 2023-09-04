import { render, screen, fireEvent } from '@testing-library/react';

import CartOrderBtns from '../components/CartOrderBtns';

describe('<CartOrderBtns />', () => {
  const handleClickCancelBtn = jest.fn();
  const handleClickOrderBtn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('call the click handlers', () => {
    render((
      <CartOrderBtns
        onClickCancelBtn={handleClickCancelBtn}
        onClickOrderBtn={handleClickOrderBtn}
      />
    ));
    fireEvent.click(screen.getByText('취소'));
    expect(handleClickCancelBtn).toBeCalled();

    fireEvent.click(screen.getByText('주문하기'));
    expect(handleClickOrderBtn).toBeCalled();
  });
});
