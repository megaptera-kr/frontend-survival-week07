import fixtures from '../../../fixtures';

import RestaurantType from '../../types/RestaurantType';

import RestaurantModel from '../../models/RestaurantModel';

const useFetchCategories = jest.fn(() => ({
  restaurants: fixtures.restaurants.map(
    (item: RestaurantType) => new RestaurantModel({ ...item }),
  ),
}));

export default useFetchCategories;
