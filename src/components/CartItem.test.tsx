import { fireEvent, render, screen } from '@testing-library/react';

import CartItem from './CartItem';

import foods from '../../fixtures/foods';

describe('CartItem', () => {
  const index = 1;
  const food = foods[0];
  const onClickItem = jest.fn();

  function renderCartItem() {
    render(<CartItem index={index} food={food} onClickItem={onClickItem} />);
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders item information', () => {
    renderCartItem();

    screen.getByText(/짜장면/);
    screen.getByText(/8,000/);
  });

  it('listens for cancel button click event', () => {
    renderCartItem();

    fireEvent.click(screen.getByText('X'));
    expect(onClickItem).toBeCalledWith(index);
  });
});
