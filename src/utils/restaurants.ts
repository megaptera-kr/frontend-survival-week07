import { Restaurant } from '../types/restaurant';

export const parseRestaurantNavMenus = (
  restaurants: Restaurant[],
) => restaurants.map((restaurant) => (
  { path: `./${restaurant.id}`, label: restaurant.name }
));

export const filterRestaurants = (
  restaurants: Restaurant[],
  id: number,
): Restaurant[] => restaurants.filter((restaurant) => restaurant.id === id);
