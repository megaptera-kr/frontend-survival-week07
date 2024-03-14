import CartItemModel from './CartItemModel';

import CartItemType from '../types/CartItemType';
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

  #insertItem({
    menuId,
    menuName,
    menuPrice,
    restaurantId,
    restaurantName,
    categoryName,
    quantity,
  }: CartItemType) {
    const cartItem: CartItemModel = new CartItemModel({
      menuId,
      menuName,
      menuPrice,
      restaurantId,
      restaurantName,
      categoryName,
      quantity,
    });

    return new CartModel([...this.cartItems, cartItem]);
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

  upsertItem({
    menuId,
    menuName,
    menuPrice,
    restaurantId,
    restaurantName,
    categoryName,
    quantity,
  }: CartItemType): CartModel {
    if (!this.validateQuantity(quantity)) {
      throw new BadParamError('error with quantity');
    }

    const index = this.cartItems.findIndex(
      (cartItem: CartItemModel) => cartItem.menuId === menuId,
    );

    if (index < 0) {
      return this.#insertItem({
        menuId,
        menuName,
        menuPrice,
        restaurantId,
        restaurantName,
        categoryName,
        quantity,
      });
    }

    return this.#updateItem({
      index,
      quantity,
    });
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
