import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import Menu from '../types/Menu';

@singleton()
@Store()
export default class CartStore {
  cart: Menu[] = [];

    @Action()
  addCart(cart: Menu) {
    this.cart = [
      ...this.cart,
      cart,
    ];
  }

    @Action()
    cancelCart(index: number) {
      this.cart = this.cart.filter((_, i) => i !== index);
    }

    @Action()
    clear() {
      this.cart = [];
    }
}
