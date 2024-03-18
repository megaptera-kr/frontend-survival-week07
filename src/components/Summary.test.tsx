import { render, screen } from '@testing-library/react';

import Summary from './Summary';
import foods from '../../fixtures/foods';

describe('Summary', () => {
  it('renders total selected menu count', () => {
    render(<Summary selectedMenu={foods} />);

    screen.getByText(/주문내역/);
    screen.getByText(/총 결제 예상금액/);
  });
});
