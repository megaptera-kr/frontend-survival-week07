import { render, screen } from '@testing-library/react';
import CartPrice from '../components/CartPrice';
import fixtures from '../../fixtures';

describe('<CartPrice />', () => {
  const { foods } = fixtures;

  it('render total price and count', () => {
    render(<CartPrice cartMenu={foods} />);
    screen.getByText(/2개/);
    screen.getByText(/13,000원/);
  });
});
