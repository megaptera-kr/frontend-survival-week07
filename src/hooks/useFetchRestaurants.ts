import { useEffect, useState } from 'react';

import ReataurantAPI from '../apis/ReataurantAPI';

import RestaurantModel from '../models/RestaurantModel';
import RestaurantType from '../types/RestaurantType';

type useFetchRestaurantsParams = {
  categoryName?: string;
  restaurantName?: string;
};

type useFetchCategoriesReturn = {
  restaurants: RestaurantModel[];
};

const api = new ReataurantAPI();

function useFetchRestaurants(
  params: useFetchRestaurantsParams,
): useFetchCategoriesReturn {
  const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);
  const { categoryName, restaurantName } = params;

  useEffect(() => {
    const fetchData = async () => {
      const data: RestaurantType[] = await api.select(params);
      const models: RestaurantModel[] = data.map(
        (item: RestaurantType) => new RestaurantModel({ ...item }),
      );

      setRestaurants(models);
    };

    fetchData();
  }, [categoryName, restaurantName]);

  return { restaurants };
}

export default useFetchRestaurants;
