import OrderKindType from '../types/OrderKindType';
import { OrderStatusType } from '../types/OrderStatusType';
import ReceiptType from '../types/ReceiptType';
import CartItemModel from './CartItemModel';

class ReceiptModel {
  readonly id: string;

  readonly orderKind: OrderKindType;

  readonly totalPrice: number;

  readonly status: OrderStatusType;

  readonly menuItems: CartItemModel[] = [];

  readonly createAt: Date;

  readonly updateAt: Date;

  constructor({
    id,
    orderKind,
    totalPrice,
    status,
    menuItems,
    createAt,
    updateAt,
  }: ReceiptType) {
    this.id = id;
    this.orderKind = orderKind;
    this.totalPrice = totalPrice;
    this.status = status;
    this.createAt = createAt;
    this.updateAt = updateAt;
    this.menuItems = menuItems.map(
      (item: CartItemModel) => new CartItemModel({ ...item }),
    );
  }
}

export default ReceiptModel;
