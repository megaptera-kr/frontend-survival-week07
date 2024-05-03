import { useEffect, useState } from 'react';
import BASE_URL from '../api';
import { Restaurant } from '../types/restaurant';

function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch(`${BASE_URL}/restaurants`);
      const data = await response.json();
      setRestaurants(data.restaurants);
    }
    getRestaurants();
  }, []);

  return restaurants;
}

export default useFetchRestaurants;
