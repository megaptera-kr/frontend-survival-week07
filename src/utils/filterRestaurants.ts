import Restaurant from '../types/Restaurant';

type FilterConditions = {
  filterText: string;
  filterCategory: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: FilterConditions,
): Restaurant[] {
  const filteredRestaurants = filterCategory === '전체' ? restaurants : restaurants.filter((restaurant) => restaurant.category === filterCategory);

  return filteredRestaurants.filter((restaurant) => (
    restaurant.name.includes(filterText.trim())
  ));
}
