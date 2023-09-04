import filterRestaurants from './filterResturants';

import fixtures from '../../fixtures';

describe('filterRestaurants', () => {
  const { restaurants } = fixtures;

  const defaultConditions = {
    query: '',
    category: '전체',
  };

  it('Filtering condition is an default value', () => {
    const filteredRestaurants = filterRestaurants(restaurants, defaultConditions);
    expect(filteredRestaurants).toEqual(restaurants);
  });

  it('When restaurants is empty', () => {
    const filteredRestaurants = filterRestaurants([], defaultConditions);
    expect(filteredRestaurants).toEqual([]);
  });

  it('When the user enters a category and text', () => {
    const filteredRestaurants = filterRestaurants(restaurants, { query: '메가', category: '중식' });
    expect(filteredRestaurants.length).toBe(1);
    expect(filteredRestaurants[0].name).toBe('메가반점');
  });
});
