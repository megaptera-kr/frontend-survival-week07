import { useFetch } from 'usehooks-ts';
import { Restaurant } from '../types/restaurants';

const url = 'http://localhost:3000/restaurants';

export default function useFetchRestaurant() {
  const { data } = useFetch<{restaurants: Restaurant[]}>(url);

  if (!data) return [];

  const { restaurants } = data;
  return restaurants;
}
