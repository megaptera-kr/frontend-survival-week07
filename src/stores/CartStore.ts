import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';

import { Food } from '../types';

@singleton()
@Store()
export default class CartStore {
  cart : Food[] = [];

  totalPrice = 0;

  count = 0;

  @Action()
  addCart(food: Food) {
    this.cart = [...this.cart, food];
    this.calcTotalPrice();
    this.calcTotalCount();
  }

  @Action()
  removeCart(index: number) {
    this.cart = this.cart.filter((_, i) => i !== index);
    this.calcTotalPrice();
    this.calcTotalCount();
  }

  @Action()
  resetCart() {
    this.cart = [];
    this.totalPrice = 0;
    this.count = 0;
  }

  @Action()
  calcTotalPrice() {
    this.totalPrice = this.cart.reduce((acc, food) => acc + food.price, 0);
  }

  @Action()
  calcTotalCount() {
    this.count = this.cart.length;
  }
}
