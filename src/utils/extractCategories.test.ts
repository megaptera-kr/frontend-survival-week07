import fixtures from '../../fixtures';
import extractCategories from './extractCategories';

describe('extractCategories', () => {
  const { restaurants } = fixtures;
  it('Extracting categories from restaurant data', () => {
    const categories = extractCategories(restaurants);
    expect(categories).toEqual(['중식', '한식', '일식']);
  });
});
