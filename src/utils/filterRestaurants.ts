import { Restaurant } from '../types/restaurants';

type filterRestaurantsProps = {
  restaurants: Restaurant[];
  searchKeyword: string;
  category: string;
}

export default function filterRestaurants({
  restaurants,
  searchKeyword,
  category,
}: filterRestaurantsProps) {
  if (!searchKeyword && category === '전체') {
    return restaurants;
  }

  return restaurants
    .filter((restaurant) => (
      restaurant.name.includes(searchKeyword.trim())
    ))
    .filter((restaurant) => {
      if (category === '전체') {
        return true;
      }

      return restaurant.category === category;
    });
}
