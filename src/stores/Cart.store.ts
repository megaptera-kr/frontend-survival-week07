import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';
import type { Menu } from '../types/restaurants';

@singleton()
@Store()
export default class CartStore {
  menu: Menu[] = [];

  orders: Menu[] = [];

  @Action()
  addMenu(food: Menu) {
    this.menu = [...this.menu, food];
  }

  @Action()
  removeMenu(index: number) {
    this.menu = this.menu.filter((_, idx) => idx !== index);
  }

  @Action()
  clearMenu() {
    this.menu = [];
  }
}
