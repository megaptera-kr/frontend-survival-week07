import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import Food from '../Types/Food';

@singleton()
@Store()
export default class CartStore {
  menu: Food[] = [];

  @Action()
  addMenu(food: Food) {
    this.menu = [
      ...this.menu,
      food,
    ];
  }

    @Action()
  removeMenu(index: number) {
    this.menu = this.menu.filter((_, i) => i !== index);
  }

    @Action()
    Clear() {
      this.menu = [];
    }
}
