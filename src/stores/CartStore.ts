import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

import CartModel from '../models/CartModel';

import CartItemType from '../types/CartItemType';

@singleton()
@Store()
class CartStore {
  cart = new CartModel();

  @Action()
  addItem({
    menuId,
    menuName,
    menuPrice,
    restaurantId,
    restaurantName,
    categoryName,
    quantity,
  }: CartItemType) {
    this.cart = this.cart.upsertItem({
      menuId,
      menuName,
      menuPrice,
      restaurantId,
      restaurantName,
      categoryName,
      quantity,
    });
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
