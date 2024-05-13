import { Category } from '../../types/category';
import { Restaurant } from '../../types/restaurant';

function filterRestaurantsByQuery(
  restaurants:Restaurant[],
  query?:{ text?: string, category?:Category},
) {
  if (!query) { return restaurants; }

  const { text = '', category = '전체' } = query;
  return restaurants.filter((restaurant) => {
    if (category === '전체') {
      return restaurant.name.includes(text);
    }
    return restaurant.name.includes(text) && restaurant.category === category;
  });
}

export default filterRestaurantsByQuery;
