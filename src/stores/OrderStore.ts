import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import { Order, OrderData } from '../types/order';

@singleton()
@Store()
export default class OrderStore {
  order: Order | null = null;

  async fetchOrders(id:string) {
    this.ordersStartLoading();

    const url = `http://localhost:3000/orders/${id}`;
    const response = await fetch(url);
    const data:OrderData = await response.json();

    this.ordersCompleteLoading(data.order);
  }

  @Action()
  private ordersStartLoading() {
    this.order = null;
  }

  @Action()
  private ordersCompleteLoading(order:Order) {
    this.order = order;
  }
}
