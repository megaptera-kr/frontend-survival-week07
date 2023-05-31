import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, useLocation } from 'react-router-dom';

import OrderPage from '../OrderPage';
import { withRouter } from '../../tests/helper';
import PATH from '../../constants/path';

const context = describe;

describe('Order Page', () => {
  function OrderCompleted() {
    const { pathname } = useLocation();
    return <pre>{JSON.stringify(pathname)}</pre>;
  }

  function renderOrderPage() {
    return render(withRouter(
      <>
        <Route path="/" element={<OrderPage />} />
        <Route path={PATH.orderCompleted} element={<OrderCompleted />} />
      </>,
    ));
  }

  it('render correctly', () => {
    const { asFragment } = renderOrderPage();

    expect(asFragment()).toMatchSnapshot();
  });

  context('when payment button is clicked', () => {
    it('order button is disabled', async () => {
      renderOrderPage();

      const paymentBtn = screen.getByRole('button', { name: '결제' });
      await userEvent.click(paymentBtn);

      await waitFor(() => expect(screen.getByText(`"${PATH.orderCompleted}"`)).toBeInTheDocument());
    });
  });
});
