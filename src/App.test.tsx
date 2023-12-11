import {
  act, render, renderHook, screen, waitFor,
} from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import { pureRoutes } from './routes';
import useStore from './hooks/useStore';
import fixtures from '../fixtures';
import { setReceipt } from './actions/uiActions';

const context = describe;

export const renderRouter = (path: string) => {
  const router = createMemoryRouter(pureRoutes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
};
describe('routes', () => {
  context('when the current path is "/"', () => {
    it('renders the home page', () => {
      renderRouter('/');

      const HomePage = screen.getByTestId('HomePage');

      expect(HomePage).toBeInTheDocument();
    });
  });

  context('when the current path is "/order"', () => {
    it('renders the order page', () => {
      renderRouter('/order');

      const OrderPage = screen.getByTestId('OrderPage');

      expect(OrderPage).toBeInTheDocument();
    });
  });

  context('when the current path is "/order/complate?orderId"', () => {
    it('renders the order complate page', async () => {
      const { result: { current } } = renderHook(() => useStore());

      act(() => current.dispatch(setReceipt(fixtures.receipt)));

      renderRouter('/order/complate');

      await waitFor(() => {
        const ComplateOrderPage = screen.getByTestId('ComplateOrderPage');

        expect(ComplateOrderPage).toBeInTheDocument();
      });
    });
  });
});
