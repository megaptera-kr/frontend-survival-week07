import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import OrderCompletePage from './OrderCompletePage';

describe('OrderCompletePage', () => {
  function renderWithRouter() {
    render(
      <MemoryRouter initialEntries={['/complete']}>
        <OrderCompletePage />
      </MemoryRouter>,
    );
  }

  it('should render the page title', () => {
    renderWithRouter();
    expect(screen.getByText(/주문 완료/)).toBeInTheDocument();
  });
});
