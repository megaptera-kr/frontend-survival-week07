import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CartPage from './CartPage';

describe('CartPage', () => {
  function renderWithRouter(path: string) {
    render(
      <MemoryRouter initialEntries={[path]}>
        <CartPage />
      </MemoryRouter>,
    );
  }

  it('should renders the page title', () => {
    renderWithRouter('/cart');
    expect(screen.getByText('장바구니')).toBeInTheDocument();
  });
});
