import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import { Restaurant, Data } from '../src/types/restaurant';

@singleton()
@Store()
export default class RestaurantStore {
  restaurants: Restaurant[] = [];

  async fetchRestaurants() {
    this.startLoading();

    const url = 'http://localhost:3000/restaurants';
    const response = await fetch(url);
    const data:Data = await response.json();

    this.completeLoading(data.restaurants);
  }

  @Action()
  private startLoading() {
    this.restaurants = [];
  }

  @Action()
  private completeLoading(restaurants:Restaurant[]) {
    this.restaurants = restaurants;
  }
}
