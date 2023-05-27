import { Store, Action } from 'usestore-ts';
import { singleton } from 'tsyringe';
import { Food } from '../types/restaurant';

@singleton()
@Store()
export default class CartStore {
  cart: Food[] = [];

  @Action()
  addItem(food: Food) {
    this.cart = [...this.cart, food];
  }

  @Action()
  removeIndexItem(index: number) {
    this.cart = this.cart.filter((_, itemIndex) => index !== itemIndex);
  }

  @Action()
  reset() {
    this.cart = [];
  }
}
