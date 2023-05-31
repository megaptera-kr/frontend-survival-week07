import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import OrderPage from './OrderPage';

describe('OrderPage', () => {
  function renderWithRouter() {
    render(
      <MemoryRouter initialEntries={['/order']}>
        <OrderPage />
      </MemoryRouter>,
    );
  }

  it('should render the page title and pay button', () => {
    renderWithRouter();
    expect(screen.getByText(/이대로 주문하시겠어요?/)).toBeInTheDocument();
    expect(screen.getByText(/결제/)).toBeInTheDocument();
  });
});
