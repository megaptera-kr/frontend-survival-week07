import { fireEvent, render, screen } from '@testing-library/react';

import fixtures from '../../../fixtures';

import OrderSummary from './OrderSummary';

describe('<OrderSummary />', () => {
  const { foods } = fixtures;
  const totalPrice = foods.reduce((a, c) => a + c.price, 0);

  it('render order summary', () => {
    render(<OrderSummary
      count={foods.length}
      totalPrice={totalPrice}
    />);

    screen.getByText(/2개/);
    screen.getByText(/16,000원/);
  });
});
