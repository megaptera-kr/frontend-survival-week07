import { Restaurant } from '../types';

interface filterRestaurantsProps {
    restaurants: Restaurant[];
    filterText: string;
    filterCategory: string;
}

const filterRestaurants = ({
  restaurants,
  filterText, filterCategory,
}: filterRestaurantsProps) => {
  const normalize = (text: string) => text.trim().toLowerCase();
  const searchWord = normalize(filterText);

  const filterWithText = restaurants.filter((restaurant) => (
    normalize(restaurant.name).includes(searchWord)
  ));

  if (filterCategory === '전체') {
    return filterWithText;
  }

  const filteredRestaurants = filterWithText.filter((restaurant) => (
    restaurant.category === filterCategory
  ));

  return filteredRestaurants;
};

export default filterRestaurants;
