import { fireEvent, render, screen } from '@testing-library/react';

import fixtures from '../../../fixtures';

import CartItem from './CartItem';

const context = describe;

const removeCart = jest.fn();

describe('<CartItem />', () => {
  const { foods } = fixtures;
  const index = 0;

  it('render cart item', () => {
    render(<CartItem
      food={foods[index]}
      index={index}
      removeCart={removeCart}
    />);

    screen.getByText(/짜장면/);
  });

  context('click "X" button', () => {
    it('execute removeCart function', () => {
      render(<CartItem
        food={foods[index]}
        index={index}
        removeCart={removeCart}
      />);

      fireEvent.click(screen.getByRole('button', { name: /X/ }));

      expect(removeCart).toHaveBeenCalledWith(index);
    });
  });
});
