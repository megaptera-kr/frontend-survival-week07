import { useFetch } from 'usehooks-ts';
import { Restaurant } from '../types';

const useFetchRestaurants = () => {
  const url = 'http://localhost:3000/restaurants';

  const { data, error } = useFetch<{restaurants: Restaurant[]}>(url);

  return {
    restaurants: data?.restaurants ?? [],
    loading: !data,
    error: !!error,
  };
};

export default useFetchRestaurants;
