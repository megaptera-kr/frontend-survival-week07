import { useEffect, useState } from 'react';
import BASE_URL from '../api';
import { Restaurant } from '../types/restaurant';

function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    async function getRestaurants() {
      try {
        const response = await fetch(`${BASE_URL}/restaurants`);
        const data = await response.json();
        setRestaurants(data.restaurants);
      } catch {
        setError('식당을 불러오지 못했습니다.');
      }
    }
    getRestaurants();
  }, []);

  return { restaurants, error };
}

export default useFetchRestaurants;
