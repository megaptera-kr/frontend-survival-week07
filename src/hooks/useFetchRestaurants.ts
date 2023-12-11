import { useFetch } from 'usehooks-ts';

import { restaurantsURL } from '../apis';

import Restaurants from '../types/Restaurants';

import Restaurant from '../types/Restaurant';

export default function useFetchRestaurants() {
  const { data } = useFetch<Restaurants>(restaurantsURL);

  if (!data) {
    return [] as unknown as Restaurant[];
  }

  return data.restaurants;
}
