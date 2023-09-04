import { render, screen, fireEvent } from '@testing-library/react';

import CartItem from '../components/CartItem';
import fixtures from '../../fixtures';

const context = describe;

describe('<CartItem />', () => {
  const { foods } = fixtures;
  const food = foods[0];
  const idx = 0;
  const handleClickRemove = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render without crash', () => {
    render((
      <CartItem
        food={food}
        idx={idx}
        onClickRemove={handleClickRemove}
      />
    ));
    screen.getByText('짜장면 8,000원');
    screen.getByRole('button', { name: 'X' });
  });

  context('When the user clicks the X button', () => {
    it('call the click handler', () => {
      render((
        <CartItem
          food={food}
          idx={idx}
          onClickRemove={handleClickRemove}
        />
      ));

      fireEvent.click(screen.getByText('X'));
      expect(handleClickRemove).toBeCalledWith(idx);
    });
  });
});
