import { render, screen } from '@testing-library/react';
import OrderMenu from './OrderMenu';
import fixtures from '../../fixtures';
import { renderWithProviders } from '../testHelper';

describe('OrderMenu', () => {
  const { order } = fixtures;

  it('OrderMenu', () => {
    render((
      <OrderMenu
        order={order}
      />
    ));

    screen.getByText(/주문목록/);
  });

  it('renders food list', () => {
    renderWithProviders(<OrderMenu order={order} />);

    const { menu } = order;

    menu.forEach((food) => screen.getByText(new RegExp(food.name)));
  });

  it('renders total price', () => {
    renderWithProviders(<OrderMenu order={order} />);

    const { totalPrice } = order;

    screen.getByText(new RegExp(`${totalPrice.toLocaleString()}원`));
  });
});
