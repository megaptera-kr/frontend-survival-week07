import { fireEvent, render, screen } from '@testing-library/react';
import CartItem from './CartItem';

describe('CartItem', () => {
  const index = 1;

  const food = {
    id: 'FOOD_ID',
    name: '짜장면',
    price: 8_000,
  };

  const handleClickCancel = jest.fn();

  function renderCartItem() {
    render((
      <CartItem
        index={index}
        food={food}
        onClickCancel={handleClickCancel}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders CartItem', () => {
    renderCartItem();

    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
  });

  it('listens for cancel button click event', () => {
    renderCartItem();

    fireEvent.click(screen.getByText('X'));

    expect(handleClickCancel).toBeCalledWith(index);
  });
});
