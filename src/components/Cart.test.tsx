import { fireEvent, render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Cart from './Cart';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => navigate,
}));

describe('Cart', () => {
  function renderWithRouter() {
    render(
      <MemoryRouter initialEntries={['/cart']}>
        <Cart />
      </MemoryRouter>,
    );
  }

  it('should navigate to order page when click order button', () => {
    renderWithRouter();
    fireEvent.click(screen.getByText(/주문/));
    expect(navigate).toBeCalledWith('/order');
  });
});
