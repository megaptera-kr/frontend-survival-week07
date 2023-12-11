import fixtures from '../../fixtures';
import filterRestaurants from './filterRestaurants';

const context = describe;

describe('filterRestaurants', () => {
  const { restaurants } = fixtures;

  context('with 전체 category', () => {
    it('returns all restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        { category: '전체', query: '' },
      );

      expect(filteredRestaurants.length).toBe(restaurants.length);
    });
  });

  context('with 한식 category', () => {
    it('returns selected category restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        {
          category: '한식',
          query: '',
        },
      );

      expect(filteredRestaurants.length).toBe(1);
    });
  });

  context('with 중식 category', () => {
    it('returns selected category restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        {
          category: '중식',
          query: '',
        },
      );

      expect(filteredRestaurants.length).toBe(1);
    });
  });

  context('with 일식 category', () => {
    it('returns selected category restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        {
          category: '일식',
          query: '',
        },
      );

      expect(filteredRestaurants.length).toBe(1);
    });
  });

  context('with query text', () => {
    it('returns query filtered restaurants', () => {
      const filterText = '메가반점';
      const filteredRestaurants = filterRestaurants(
        restaurants,
        {
          category: '전체',
          query: filterText,
        },
      );

      expect(filteredRestaurants.length).toBe(1);
      expect(filteredRestaurants[0].name).toBe(filterText);
    });
  });
});
