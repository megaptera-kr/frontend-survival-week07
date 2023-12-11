import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import type Food from '../types/Food';

@singleton()
@Store()
export default class MenuStore {
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
  clear() {
    this.menu = [];
  }
}
