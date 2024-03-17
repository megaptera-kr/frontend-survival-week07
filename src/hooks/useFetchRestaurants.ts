import { useFetch } from 'usehooks-ts';

import Restaurant from '../types/Restaurant';

import PUBLIC_API_URL from '../utils/api';

const url = `${PUBLIC_API_URL}/restaurants`;

interface Restaurants {
  [restaurants: string]: Restaurant[];
}

export default function useFetchRestaurants() {
  const { data } = useFetch<Restaurants>(url);

  if (!data) {
    return [];
  }

  return data.restaurants;
}
