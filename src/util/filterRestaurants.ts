import Restaurant from '../Types/Restaurant';

type filterRestaurantsCondition = {
    filterText: string,
    filterCategory: string
}

function nomalize(s: string) {
  return s.toLocaleLowerCase().replace(/\s/g, '');
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: filterRestaurantsCondition,
) {
  let filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === filterCategory);

  const query = nomalize(filterText);

  if (filterText.length) {
    filteredRestaurants = filteredRestaurants.filter((restaurant) => {
      const name = nomalize(restaurant.name);
      return name.includes(query);
    });
  }

  return filteredRestaurants;
}
