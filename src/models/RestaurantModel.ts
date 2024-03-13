import MenuType from '../types/MenuType';
import RestaurantType from '../types/RestaurantType';

import MenuModel from './MenuModel';

class RestaurantModel {
  #id: number;

  #name: string;

  #category: string;

  #menu: MenuModel[];

  constructor({ id, name, category, menu }: RestaurantType) {
    this.#id = id;
    this.#name = name;
    this.#category = category;
    this.#menu = menu.map((item: MenuType) => new MenuModel({ ...item }));
  }

  getId(): number {
    return this.#id;
  }

  getName(): string {
    return this.#name;
  }

  getCategory(): string {
    return this.#category;
  }

  getMenu(): MenuModel[] {
    return this.#menu;
  }
}

export default RestaurantModel;
