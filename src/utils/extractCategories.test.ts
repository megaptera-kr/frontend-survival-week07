import extractCategories from './extractCategories';
import fixtures from '../../fixtures';

describe('extractCategories.test', () => {
  it('returns categories from restaurants', () => {
    const { restaurants } = fixtures;
    const categories = extractCategories(restaurants);
    expect(categories).toEqual(['중식', '한식', '일식']);
  });
});
