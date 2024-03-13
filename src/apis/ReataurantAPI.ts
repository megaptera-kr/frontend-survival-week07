import { singleton } from 'tsyringe';

import { normalize } from '../utils/common';

import RestaurantType from '../types/RestaurantType';

type QueryString = {
  categoryName?: string;
  restaurantName?: string;
};

@singleton()
class ReataurantAPI {
  readonly url: URL;

  constructor() {
    this.url = new URL('http://localhost:3000/restaurants');
  }

  async select(query: QueryString): Promise<RestaurantType[]> {
    const params = new URLSearchParams();
    params.append(
      'categoryName',
      !query.categoryName ? '전체' : query.categoryName,
    );
    params.append('restaurantName', normalize(query.restaurantName));

    this.url.search = params.toString();

    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error(`Fail to get data. Status: ${response.status}`);
    }

    return response.json();
  }
}

export default ReataurantAPI;
