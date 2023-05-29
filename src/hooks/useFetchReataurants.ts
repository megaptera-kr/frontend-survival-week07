import { useEffect, useState } from 'react';

export default function useFetchReataurants() {
  const [restaurantsData, setRestaurantsData] = useState([]);

  const fetchRestaurants = async () => {
    const url = 'http://localhost:3000/restaurants';
    const res = await fetch(url);
    const { restaurants } = await res.json();

    setRestaurantsData(restaurants);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return restaurantsData;
}
