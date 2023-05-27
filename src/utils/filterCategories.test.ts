import restaurants from '../fixtures/restaurants';
import filterCategories from './filterCategories';

const context = describe;

describe('filterCategories ', () => {
  context('when get restaurants data', () => {
    it('restaurants has no data', () => {
      const filterCategoriesArr = filterCategories();

      expect(filterCategoriesArr).toHaveLength(1);
    });
    it('restaurants has no category', () => {
      const filterCategoriesArr = filterCategories([]);

      expect(filterCategoriesArr).toHaveLength(1);
    });
    it('restaurants has category "한식, 중식"', () => {
      const filterCategoriesArr = filterCategories(restaurants);

      expect(filterCategoriesArr).toHaveLength(3);
    });
  });
});
