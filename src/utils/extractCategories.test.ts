import restaurants from '../../fixtures/restaurants';

import extractCategories from './extractCategories';

describe('extractCategories', () => {
  it('returns categories from restaurants', () => {
    const categories = extractCategories(restaurants);
    expect(categories).toEqual(['중식', '한식', '일식']);
  });
});
