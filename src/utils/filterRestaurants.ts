import type Restaurant from '../types/Restaurant';

type filterRestaurantType = {
  category: string;
  filterText: string
}

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}
export default function filterRestaurant(
  data: Restaurant[],
  { category, filterText }: filterRestaurantType,
) {
  const match = (restaurant: Restaurant) => (restaurant.category === category);

  const filteredRestaurants = category === '전체'
    ? data
    : data.filter(match);

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(query)
  );

  return filteredRestaurants.filter(contains);
}
