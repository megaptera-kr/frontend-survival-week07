/* eslint-disable no-shadow */
import Restaurant from '../Types/Restaurant';

function normalized(text : string) {
  return text.trim().toLocaleLowerCase();
}

interface FilterConditions {
  filterText : string ;
  filterCategory : string;
}

export default function filterRestaurants(
  restaurants :Restaurant[],
  { filterText, filterCategory } : FilterConditions,
) : Restaurant[] {
  const match = (restaurant : Restaurant) => (restaurant.category === filterCategory);

  const filterRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter(match);

  const query = normalized(filterText);

  if (!query) {
    return filterRestaurants;
  }

  const contains = (restaurant : Restaurant) => normalized(restaurant.name).includes(query);

  return filterRestaurants.filter(contains);
}
