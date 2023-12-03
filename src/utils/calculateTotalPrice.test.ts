import fixtures from '../../fixtures';
import calculateTotalPrice from './calculateTotalPrice';

describe('calculateTotalPrice', () => {
  it('returns caculate total price', () => {
    const { foods } = fixtures;
    const totalPrice = calculateTotalPrice(foods);

    expect(totalPrice).toEqual(13000);
  });
});
