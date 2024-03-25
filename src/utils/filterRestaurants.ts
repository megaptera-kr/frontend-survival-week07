import Restaurant from '../types/Restaurant';

const normalize = (text: string) => text.trim().toLocaleLowerCase();

type FilterConditions = {
  filterText: string;
  filterCategory: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: FilterConditions,
): Restaurant[] {
  const matchCategory = (restaurant: Restaurant) => (restaurant.category === filterCategory);

  const filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter(matchCategory);

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(query));

  return filteredRestaurants.filter(contains);
}
