import { fireEvent, render, screen } from '@testing-library/react';
import CartItem from './CartItem';

const context = describe;

describe('CartItem', () => {
  const handleDeleteOrder = jest.fn();
  const index = 1;
  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderCartItem = () => {
    render(<CartItem order={food} index={index} handleDeleteOrder={handleDeleteOrder} />);
  };

  it('render elements', () => {
    renderCartItem();

    screen.getByText(/짜장면/);
  });

  context('when user click x button', () => {
    it('calls handleDeleteOrder handler', () => {
      renderCartItem();
      fireEvent.click(screen.getByText('x'));
      expect(handleDeleteOrder).toBeCalledWith(index);
    });
  });
});
