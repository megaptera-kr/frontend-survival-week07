import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, useLocation } from 'react-router-dom';

import CartPage from '../CartPage';
import useCartStore from '../../hooks/useCartStore';
import CartStore from '../../stores/CartStore';
import Item from '../../models/Item';
import { cartItems } from '../../tests/fixtures/cartItems';
import { withRouter } from '../../tests/helper';
import PATH from '../../constants/path';

const context = describe;

jest.mock('../../hooks/useCartStore');

describe('Cart Page', () => {
  function OrderPage() {
    const { pathname } = useLocation();
    return <pre>{JSON.stringify(pathname)}</pre>;
  }

  function renderCartPage(items: Item[]) {
    jest.mocked(useCartStore).mockImplementation(() => [{ items }, new CartStore()]);
    return render(withRouter(
      <>
        <Route path="/" element={<CartPage />} />
        <Route path={PATH.order} element={<OrderPage />} />
      </>,
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when cart is empty', () => {
    it('order button is disabled', async () => {
      renderCartPage([]);

      const orderBtn = screen.getByRole('button', { name: '주문하기' });
      await userEvent.click(orderBtn);

      expect(orderBtn).toBeDisabled();
      expect(screen.getByText('장바구니')).toBeInTheDocument();
    });
  });

  context('when order button is clicked', () => {
    it('navigate to order page', async () => {
      renderCartPage(cartItems);

      const orderBtn = screen.getByRole('button', { name: '주문하기' });
      await userEvent.click(orderBtn);

      expect(screen.getByText(`"${PATH.order}"`)).toBeInTheDocument();
    });
  });
});
