import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';
import { OrderMenu, Response } from '../types/cart';

import { Menu } from '../types/restaurant';

@singleton()
@Store()
export default class CartStore {
  menu: Menu[] = [];

  totalOrderCount = 0;

  totalPrice = 0;

  orderId = '';

  async orderMenuRequest({ menu, totalPrice }:OrderMenu) {
    try {
      this.startLoading();

      const responseOption = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ menu, totalPrice }),
      };
      const url = 'http://localhost:3000/orders';
      const response = await fetch(url, responseOption);
      const data:Response = await response.json();

      this.completeLoading(data.id);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  @Action()
  addOrderMenu(menu:Menu) {
    this.menu = [...this.menu, menu];
    this.calculateOrderCount(this.menu);
    this.calculateTotalPrice(this.menu);
  }

  @Action()
  removeOrderMenu(currentIndex: number) {
    this.menu = this.menu.filter((_, index) => index !== currentIndex);
    this.calculateOrderCount(this.menu);
    this.calculateTotalPrice(this.menu);
  }

  @Action()
  allCancelMenu() {
    this.menu = [];
    this.totalOrderCount = 0;
    this.totalPrice = 0;
  }

  @Action()
  calculateTotalPrice(menu:Menu[]) {
    this.totalPrice = menu.reduce((acc, cur) => acc + cur.price, 0);
  }

  @Action()
  calculateOrderCount(menu:Menu[]) {
    this.totalOrderCount = menu.length;
  }

  @Action()
  private startLoading() {
    this.orderId = '';
  }

  @Action()
  private completeLoading(orderId:string) {
    this.orderId = orderId;
  }
}
