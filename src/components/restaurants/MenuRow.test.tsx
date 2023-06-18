import { fireEvent, render, screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import MenuRow from './MenuRow';

const context = describe;

const addCart = jest.fn();

describe('<MenuRow />', () => {
  const food = fixtures.foods[0];

  it('render menu', () => {
    render(<MenuRow
      food={food}
      addCart={addCart}
    />);

    screen.getByText(/짜장면/);
  });

  context('click the add to cart button', () => {
    it('execute addCart function', () => {
      render(<MenuRow
        food={food}
        addCart={addCart}
      />);

      const button = screen.getByRole('button', { name: /짜장면/ });

      fireEvent.click(button);

      expect(addCart).toHaveBeenCalledWith(food);
    });
  });
});
