import restaurants from '../../fixtures/restaurants';

import filterRestaurants from './filterRestaurants';

const context = describe;

describe('filterRestaurants', () => {
  context('with [전체] category ', () => {
    it('returns all restaurants', () => {
      const filterText = '';
      const filterCategory = '전체';
      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

      expect(filteredRestaurants).toEqual(restaurants);
    });
  });

  context('with [일식] category ', () => {
    it('returns selected category restaurants', () => {
      const filterText = '';
      const filterCategory = '일식';
      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

      expect(filteredRestaurants.length).toBe(1);
    });
  });

  context('with filter text ', () => {
    it('returns filtered restaurants', () => {
      const filterText = '혹등고래카레';
      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory: '전체' });
      expect(filteredRestaurants.length).toBe(1);
      expect(filteredRestaurants[0].name).toBe(filterText);
    });
  });

  context('with filter text ', () => {
    it('returns filtered restaurants', () => {
      const filterText = '메가반점';
      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory: '전체' });
      expect(filteredRestaurants.length).toBe(1);
      expect(filteredRestaurants[0].name).toBe(filterText);
    });
  });
});
