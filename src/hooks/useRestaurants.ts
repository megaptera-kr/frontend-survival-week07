import { useFetch } from 'usehooks-ts';
import { Restaurant } from '../types';

const useRestaurants = ({ keyword, category }: {keyword: string; category: string}) => {
  const url = `http://localhost:3000/restaurants?keyword=${keyword}&category=${category}`;

  const { data } = useFetch<{restaurants: Restaurant[]}>(url);

  return {
    restaurants: data?.restaurants ?? [],
  };
};

export default useRestaurants;
