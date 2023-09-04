import fixtures from '../../fixtures';
import { Menu } from '../types/restaurants';
import calcTotalPrice from './calcTotalPrice';

describe('calcTotalPrice', () => {
  const { foods } = fixtures;

  it('Calculate the total price of an empty cart.', () => {
    const cart: Menu[] = [];
    const totalPrice = calcTotalPrice(cart);
    expect(totalPrice).toBe(0);
  });

  it('Calculate the total price of the cart with items.', () => {
    const cart: Menu[] = foods;
    const totalPrice = calcTotalPrice(cart);
    expect(totalPrice).toBe(13_000);
  });
});
