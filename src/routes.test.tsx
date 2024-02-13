import { render, screen } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router';

import routes from './routes';

const context = describe;

export default function renderRouter(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
}
describe('App', () => {
  context('when the current path is "/"', () => {
    it('renders the home page', () => {
      renderRouter('/');
      expect(screen.getByText(/매장 주문/)).toBeInTheDocument();
    });
  });

  context('when the current path is "/order"', () => {
    it('renders the home page', () => {
      renderRouter('/order');
      screen.getByText(/주문페이지/);
    });
  });
});
