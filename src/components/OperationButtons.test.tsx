import { fireEvent, render, screen } from '@testing-library/react';
import OperationButtons from './OperationButtons';

describe('OperationButtons', () => {
  const onClickCancel = jest.fn();
  const onClickOrder = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders OperationButtons', () => {
    render((
      <OperationButtons
        onClickCancel={onClickCancel}
        onClickOrder={onClickOrder}
      />
    ));

    screen.getByText('취소');
    screen.getByText('주문하기');
  });

  it('listens for click events', () => {
    render((
      <OperationButtons
        onClickCancel={onClickCancel}
        onClickOrder={onClickOrder}
      />
    ));

    fireEvent.click(screen.getByText('취소'));

    expect(onClickCancel).toBeCalled();

    fireEvent.click(screen.getByText('주문하기'));

    expect(onClickOrder).toBeCalled();
  });
});
