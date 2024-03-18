import fixtures from '../../../fixtures';

import CategoryType from '../../types/CategoryType';

import CategoryModel from '../../models/CategoryModel';

const useFetchCategories = jest.fn(() => ({
  categories: fixtures.categories.map(
    (item: CategoryType) => new CategoryModel({ ...item }),
  ),
}));

export default useFetchCategories;
