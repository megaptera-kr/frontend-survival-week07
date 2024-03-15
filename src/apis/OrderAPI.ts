import { singleton } from 'tsyringe';

import CartModel from '../models/CartModel';
import CartItemModel from '../models/CartItemModel';

import OrderKindType from '../types/OrderKindType';
import ReceiptModel from '../models/ReceiptModel';

@singleton()
class OrderAPI {
  readonly url: URL;

  constructor() {
    this.url = new URL('http://localhost:3000/orders');
  }

  // eslint-disable-next-line class-methods-use-this
  #makeBody({ cart }: { cart: CartModel }): {
    orderKind: OrderKindType;
    totalItemNum: number;
    totalPrice: number;
    menuItems: CartItemModel[];
  } {
    if (!cart.orderKind) {
      throw new Error();
    }

    return {
      orderKind: cart.orderKind,
      totalItemNum: cart.totalItemNum(),
      totalPrice: cart.totalPrice(),
      menuItems: cart.cartItems,
    };
  }

  async create({ cart }: { cart: CartModel }): Promise<{ orderId: string }> {
    const body = this.#makeBody({ cart });

    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Fail to create data. Status: ${response.status}`);
    }

    return response.json();
  }
}

export default OrderAPI;
