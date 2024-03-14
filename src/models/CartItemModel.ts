import { v4 as uuidv4 } from 'uuid';

import CartItemType from '../types/CartItemType';
import MenuItemModel from './MenuItemModel';
import RestaurantModel from './RestaurantModel';
import { moneyformat } from '../utils/common';

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

  static makeInstanceHelper({
    menuItem,
    restaurant,
    quantity,
  }: {
    menuItem: MenuItemModel;
    restaurant: RestaurantModel;
    quantity: number;
  }): CartItemModel {
    return new CartItemModel({
      menuId: menuItem.getId(),
      menuName: menuItem.getName(),
      menuPrice: menuItem.getPrice(),
      restaurantId: restaurant.getId(),
      restaurantName: restaurant.getName(),
      categoryName: restaurant.getCategory(),
      quantity,
    });
  }

  price(): number {
    return this.menuPrice * this.quantity;
  }

  priceFormatted(): string {
    return moneyformat(this.price());
  }
}

export default CartItemModel;
