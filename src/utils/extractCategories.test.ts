import fixtures from '../../fixtures';
import extractCategories from './extractCategories';

describe('extractCategories', () => {
  it('returns categories fromt restaurants', () => {
    const { restaurants } = fixtures;

    const categories = extractCategories(restaurants);

    expect(categories).toEqual(['중식', '한식', '일식']);
  });
});
