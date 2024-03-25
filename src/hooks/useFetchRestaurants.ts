import { useEffect, useState } from 'react';

import { get } from '../apis/api';
import Restaurant from '../types/Restaurant';

export default function useFetchRestaurants(): Restaurant[] {
  const [data, setData] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response = await get<{ restaurants: Restaurant[] }>('localhost:3000', 'restaurants');
        const restaurants = response?.restaurants ?? [];

        setData(restaurants);
      } catch (error) {
        setData([]);
      }
    }

    fetchData();
  }, []);

  return data;
}
