import foods from '../../fixtures/foods';
import Food from '../types/Food';

import calculateTotalPrice from './calculateTotalPrice';

const context = describe;

describe('총 가격 계산', () => {
  context('calculateTotalPrice()', () => {
    it('should return 0 for an empty array', () => {
      const menu: Food[] = [];
      expect(calculateTotalPrice(menu)).toBe(0);
    });

    it('should return 0 for an empty array', () => {
      const menu: Food[] = foods;
      expect(calculateTotalPrice(menu)).toBe(30000);
    });
  });
});
