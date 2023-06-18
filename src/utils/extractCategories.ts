import { Restaurant } from '../types';

const extractCategories = (restaurants : Restaurant[]) => {
  const categories = new Set(['전체']);

  restaurants.forEach((restaurant) => {
    categories.add(restaurant.category);
  });

  return [...categories];
};

export default extractCategories;
