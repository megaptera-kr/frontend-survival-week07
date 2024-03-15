/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';
import Restaurant from '../Types/Restaurant';

const url = 'http://localhost:3000/restaurants';

export default function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(url);
      const data = await response.json();
      if (!data) {
        return [];
      }

      setRestaurants(data.restaurants);
    };

    fetchRestaurants();
  }, []);

  return restaurants;
}
