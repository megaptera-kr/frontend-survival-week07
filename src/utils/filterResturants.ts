import { Restaurant } from '../types/restaurants';

type FilterConditions = {
  category: string;
  query: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { category, query }: FilterConditions,
) {
  const match = (restaurant: Restaurant) => restaurant.category === category;
  const filteredByCategory = category === '전체' ? restaurants : restaurants.filter(match);

  return filteredByCategory.filter(
    (restaurant) => restaurant.name.includes(query.trim().toLowerCase()),
  );
}
