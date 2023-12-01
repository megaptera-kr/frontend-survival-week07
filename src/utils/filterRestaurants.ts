import { Restaurant } from '../types';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type FilterConditions = {
    query: string;
    category: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { query, category }: FilterConditions,
): Restaurant[] {
  const match = (restaurant: Restaurant) => (restaurant.category === category);

  const filteredRestaurants = category === '전체'
    ? restaurants
    : restaurants.filter(match);

  const filterQuery = normalize(query);

  if (!filterQuery) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(filterQuery)
  );

  return filteredRestaurants.filter(contains);
}
