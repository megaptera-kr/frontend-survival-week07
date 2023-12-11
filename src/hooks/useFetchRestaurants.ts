import { useEffect, useState } from 'react';
import { Restaurant } from '../types';

const url = 'http://localhost:3000/restaurants';

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>();

  const fetchProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRestaurants(data.restaurants);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return restaurants || [];
};

export default useFetchRestaurants;
