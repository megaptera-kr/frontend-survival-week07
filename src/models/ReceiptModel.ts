import CartItemModel from './CartItemModel';

import OrderKindType from '../types/OrderKindType';

class ReceiptModel {
  readonly id: string;

  readonly orderKind: OrderKindType;

  readonly totalPrice: number;

  readonly menuItems: CartItemModel[];

  constructor({
    id,
    orderKind,
    totalPrice,
    menuItems,
  }: {
    id: string;
    orderKind: OrderKindType;
    totalPrice: number;
    menuItems: CartItemModel[];
  }) {
    this.id = id;
    this.orderKind = orderKind;
    this.totalPrice = totalPrice;
    this.menuItems = menuItems;
  }
}

export default ReceiptModel;
