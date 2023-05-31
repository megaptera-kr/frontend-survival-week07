import Restaurant from '../types/Restaurant';

export default function extractCategories(restaurants: Restaurant[]) {
  return restaurants.reduce((acc, restaurant) => (
    acc.includes(restaurant.category) ? acc : [...acc, restaurant.category]
  ), ['전체']);
}
