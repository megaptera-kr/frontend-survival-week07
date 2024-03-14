import CartItemModel from './CartItemModel';

import { moneyformat } from '../utils/common';

import OrderKindType from '../types/OrderKindType';
import { ORDER_TYPE_STORE } from '../const/ConstOrder';

import BadParamError from '../exceptions/BadParamError';
import NotFoundError from '../exceptions/NotFoundError';

export const MIN_QUANTITY = 1;
export const MAX_QUANTITY = 20;

class CartModel {
  private MIN_QUANTITY = MIN_QUANTITY;

  private MAX_QUANTITY = MAX_QUANTITY; // The standard number for judging abuse

  readonly cartItems: CartItemModel[] = [];

  readonly orderKind: OrderKindType | '' = ORDER_TYPE_STORE;

  constructor(
    cartItems: CartItemModel[] = [],
    orderKind: OrderKindType | '' = '',
  ) {
    this.cartItems = cartItems;
    this.orderKind = orderKind;
  }

  private validateQuantity(quantity: number): boolean {
    return this.MIN_QUANTITY <= quantity && this.MAX_QUANTITY >= quantity;
  }

  #insertItem(cartItem: CartItemModel) {
    return new CartModel(
      [...this.cartItems, new CartItemModel({ ...cartItem })],
      this.orderKind,
    );
  }

  #updateItem({ index, quantity }: { index: number; quantity: number }) {
    const cartItem: CartItemModel = this.cartItems[index];

    return new CartModel(
      [
        ...this.cartItems.slice(0, index),
        new CartItemModel({
          ...cartItem,
          quantity: cartItem.quantity + quantity,
        }),
        ...this.cartItems.slice(index + 1),
      ],
      this.orderKind,
    );
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

    return new CartModel(
      [...this.cartItems.slice(0, index), ...this.cartItems.slice(index + 1)],
      this.orderKind,
    );
  }

  clearItems(): CartModel {
    this.cartItems.length = 0;
    return new CartModel();
  }

  setOrderKind(orderKind: OrderKindType | '' = ''): CartModel {
    return new CartModel([...this.cartItems], orderKind);
  }

  // ---------------------------------------------------------------------------
  // Properties
  totalNumItems(): number {
    return this.cartItems.reduce(
      (acc, item: CartItemModel) => acc + item.quantity,
      0,
    );
  }

  totalPrice(): number {
    return this.cartItems.reduce(
      (acc, item: CartItemModel) => acc + item.price(),
      0,
    );
  }

  totalPriceFormatted(): string {
    return moneyformat(this.totalPrice());
  }
}

export default CartModel;
