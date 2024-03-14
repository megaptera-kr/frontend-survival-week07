import { v4 as uuidv4 } from 'uuid';

import CartItemType from '../types/CartItemType';

class CartItemModel {
  readonly id: string;

  readonly menuId: number; // unique

  readonly menuName: string;

  readonly menuPrice: number;

  readonly restaurantId: number;

  readonly restaurantName: string;

  readonly categoryName: string;

  readonly quantity: number;

  constructor({
    menuId,
    menuName,
    menuPrice,
    restaurantId,
    restaurantName,
    categoryName,
    quantity,
  }: CartItemType) {
    this.id = uuidv4();
    this.menuId = menuId;
    this.menuName = menuName;
    this.menuPrice = menuPrice;
    this.restaurantId = restaurantId;
    this.restaurantName = restaurantName;
    this.categoryName = categoryName;
    this.quantity = quantity;
  }

  price(): number {
    return this.menuPrice * this.quantity;
  }
}

export default CartItemModel;
