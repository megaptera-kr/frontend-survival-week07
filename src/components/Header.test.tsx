import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  function renderWithRouter(initialEntries: string[] = ['/']) {
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Header />
      </MemoryRouter>,
    );
  }

  it('renders page navigation', () => {
    renderWithRouter();
    expect(screen.getByText(/Home/)).toBeInTheDocument();
    expect(screen.getByText(/식당 목록/)).toBeInTheDocument();
    expect(screen.getByText(/장바구니/)).toBeInTheDocument();
  });

  it('has the active link', () => {
    renderWithRouter(['/']);
    expect(screen.getByText(/Home/)).toHaveClass('active');
  });
});
