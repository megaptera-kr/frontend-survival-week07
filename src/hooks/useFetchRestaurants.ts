import { useFetch } from 'usehooks-ts';

import { Restaurant } from '../types/restaurants';

const API_URL = process.env.API_BASE_URL || 'http://localhost:3000';

export default function useFetchRestaurants() {
  const { data } = useFetch<{restaurants: Restaurant[]}>(`${API_URL}/restaurants`);

  return data?.restaurants || [];
}
