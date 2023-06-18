import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import fixtures from '../../../fixtures';
import { Food } from '../../types';
import Cart from './Cart';

const context = describe;

const state : {
  cart : Food[],
  totalPrice: number,
  count: number
} = {
  cart: [],
  totalPrice: 0,
  count: 0,
};

jest.mock('../../hooks/useCartStore', () => () => [state]);

describe('<Cart />', () => {
  it('render cart', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Cart />
      </MemoryRouter>,
    );

    screen.getByText(/예상금액/);
    screen.getByRole('button', { name: /주문하기/ });
  });

  context('empty cart', () => {
    it('render price 0', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Cart />
        </MemoryRouter>,
      );

      screen.getByText(/0원/);
    });
  });

  context('cart with food', () => {
    const { foods } = fixtures;

    beforeEach(() => {
      state.cart = foods;
      state.count = 2;
      state.totalPrice = 16000;
    });

    it('render food list and order summary', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Cart />
        </MemoryRouter>,
      );

      screen.getByText(/짜장면/);
      screen.getByText(/2개/);
      screen.getByText(/16,000원/);
    });
  });
});
