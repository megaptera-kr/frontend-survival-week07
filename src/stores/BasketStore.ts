import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';

import { Menu } from '../types/restaurants';

@singleton()
@Store()
export default class BasketStore {
  basket: Menu[] = [];

  @Action()
  addMenu(menu: Menu) {
    this.basket = [
      ...this.basket,
      menu,
    ];
  }

  @Action()
  removeMenu(menuIndex: number) {
    const newBasket = this.basket.filter((_, index) => index !== menuIndex);
    this.basket = newBasket;
  }

  @Action()
  clearBasket() {
    this.basket = [];
  }

  get totalPrice() {
    return this.basket.reduce((acc, cur) => acc + cur.price, 0);
  }

  get totalCount() {
    return this.basket.length;
  }
}
