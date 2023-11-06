import { render, screen } from '@testing-library/react';
import Summary from './Summary';
import fixtures from '../../fixtures';

describe('Summary', () => {
  const selectedMenu = fixtures.foods;

  it('render Summary', () => {
    render((<Summary
      selectedMenu={selectedMenu}
    />));

    screen.getByText(/주문내역/);
    screen.getByText(/2/);
    screen.getByText(/총 결제 예상금액/);
    screen.getByText(/13,000/);
  });
});
