import restaurants from '../../fixtures/restaurants';

import filterBySearchQuery from './filterBySearchQuery';

const context = describe;

describe('메뉴판 필터링', () => {
  context('filterBySearchQuery()', () => {
    it.each([
      [filterBySearchQuery([...restaurants], '메가'), 2],
      [filterBySearchQuery([...restaurants], '감감'), 0],
    ])('filterBySearchQuery(%s, %s) returns %s', (params, expected) => {
      expect(params.length).toBe(expected);
    });
  });
});
