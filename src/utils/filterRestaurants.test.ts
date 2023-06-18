import fixtures from '../../fixtures';
import filterRestaurants from './filterRestaurants';

const context = describe;

const { restaurants } = fixtures;

describe('filterRestaurants', () => {
  context('input restaurants data with text', () => {
    it('output restaurnats filtered by text', () => {
      const filterText = '메가반점';
      const filterCategory = '전체';

      const result = filterRestaurants({
        restaurants, filterText, filterCategory,
      });

      expect(result).toHaveLength(1);
    });
  });

  context('input restaurants data with category', () => {
    it('output restaurnats filtered by category', () => {
      const filterText = '';
      const filterCategory = '중식';

      const result = filterRestaurants({
        restaurants, filterText, filterCategory,
      });

      expect(result).toHaveLength(1);
    });
  });

  context('input restaurants data with text and category', () => {
    it('output restaurnats filtered by text and category', () => {
      const filterText = '메리김밥';
      const filterCategory = '한식';

      const result = filterRestaurants({
        restaurants, filterText, filterCategory,
      });

      expect(result).toHaveLength(1);
    });
  });
});
