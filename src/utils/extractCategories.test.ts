import fixtures from '../../fixtures';
import extractCategories from './extractCategories';

const context = describe;

describe('extractCategories', () => {
  context('input restaurants data', () => {
    it('extract categories include "전체"', () => {
      const { restaurants } = fixtures;

      expect(extractCategories(restaurants)).toHaveLength(3);
    });
  });
});
