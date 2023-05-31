import { useFetch } from 'usehooks-ts';
import Restaurant from '../types/Restaurant';

const emptyRestaurants = [] as Restaurant[];
type Restaurants = {
  [restaurants : string] : Restaurant[]
}

export default function useFetchRestaurants() {
  const url = 'http://localhost:3000/restaurants';
  const { data } = useFetch<Restaurants>(url);

  if (!data) {
    return emptyRestaurants;
  }

  return data.restaurants;
}
