import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

import CartModel from '../models/CartModel';
import CartItemModel from '../models/CartItemModel';

import OrderKindType from '../types/OrderKindType';
import { ORDER_TYPE_STORE } from '../const/ConstOrder';

@singleton()
@Store()
class CartStore {
  cart: CartModel = new CartModel();

  orderKind: OrderKindType | '' = ORDER_TYPE_STORE;

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

  @Action()
  setOrderKind(kind: OrderKindType | '' = '') {
    this.orderKind = !kind ? '' : kind;
  }
}

export default CartStore;
