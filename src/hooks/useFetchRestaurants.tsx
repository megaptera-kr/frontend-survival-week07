import data from '../data';

export default function useFetchRestaurants(id: number) {
  return data.restaurants.filter((item) => item.id === id);
}
