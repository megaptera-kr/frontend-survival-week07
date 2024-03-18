/* eslint-disable comma-dangle */
import { render, fireEvent, screen } from '@testing-library/react';

import OperationButtons from './OperationButtons';

describe('OperationButtons', () => {
  const handleClickClear = jest.fn();
  const handleClickOrder = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('listens for click events', () => {
    render(
      <OperationButtons
        handleClickClear={handleClickClear}
        handleClickOrder={handleClickOrder}
      />
    );

    fireEvent.click(screen.getByText('취소'));
    expect(handleClickClear).toBeCalled();

    fireEvent.click(screen.getByText('주문하기'));
    expect(handleClickOrder).toBeCalled();
  });
});
