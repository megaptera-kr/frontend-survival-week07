import CartItemModel from './CartItemModel';

import BadParamError from '../exceptions/BadParamError';
import NotFoundError from '../exceptions/NotFoundError';

export const MIN_QUANTITY = 1;
export const MAX_QUANTITY = 20;

class CartModel {
  private MIN_QUANTITY = MIN_QUANTITY;

  private MAX_QUANTITY = MAX_QUANTITY; // The standard number for judging abuse

  readonly cartItems: CartItemModel[] = [];

  constructor(cartItems: CartItemModel[] = []) {
    this.cartItems = cartItems;
  }

  private validateQuantity(quantity: number): boolean {
    return this.MIN_QUANTITY <= quantity && this.MAX_QUANTITY >= quantity;
  }

  #insertItem(cartItem: CartItemModel) {
    return new CartModel([
      ...this.cartItems,
      new CartItemModel({ ...cartItem }),
    ]);
  }

  #updateItem({ index, quantity }: { index: number; quantity: number }) {
    const cartItem: CartItemModel = this.cartItems[index];

    return new CartModel([
      ...this.cartItems.slice(0, index),
      new CartItemModel({
        ...cartItem,
        quantity: cartItem.quantity + quantity,
      }),
      ...this.cartItems.slice(index + 1),
    ]);
  }

  upsertItem(cartItem: CartItemModel): CartModel {
    if (!this.validateQuantity(cartItem.quantity)) {
      throw new BadParamError('error with quantity');
    }

    const index = this.cartItems.findIndex(
      (item: CartItemModel) => item.menuId === cartItem.menuId,
    );

    return index < 0
      ? this.#insertItem(cartItem)
      : this.#updateItem({ index, quantity: cartItem.quantity });
  }

  deleteItem(menuId: number) {
    const index = this.cartItems.findIndex(
      (cartItem: CartItemModel) => cartItem.menuId === menuId,
    );

    if (index < 0) {
      throw new NotFoundError();
    }

    return new CartModel([
      ...this.cartItems.slice(0, index),
      ...this.cartItems.slice(index + 1),
    ]);
  }

  clearItems(): CartModel {
    this.cartItems.length = 0;
    return new CartModel();
  }
}

export default CartModel;
