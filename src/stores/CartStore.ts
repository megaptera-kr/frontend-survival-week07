import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

import CartModel from '../models/CartModel';

import CartItemModel from '../models/CartItemModel';

@singleton()
@Store()
class CartStore {
  cart = new CartModel();

  @Action()
  addItem(cartItem: CartItemModel) {
    this.cart = this.cart.upsertItem(cartItem);
  }

  @Action()
  deleteItem(menuId: number) {
    this.cart = this.cart.deleteItem(menuId);
  }

  @Action()
  clearItems() {
    this.cart = this.cart.clearItems();
  }
}

export default CartStore;
