import { Restaurant } from '../types/restaurants';

export default function extractCategories(restaurants: Restaurant[]) {
  // const categories = restaurants.map((restaurant) => restaurant.category);
  // return ['전체', ...new Set(categories)];
  const categories = restaurants.reduce((acc: string[], restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);

  return categories;
}
