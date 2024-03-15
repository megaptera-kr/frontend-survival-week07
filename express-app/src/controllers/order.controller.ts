import { Express, Request, Response } from 'express';

import orders from '../database/orders.table';

import OrderRequest from '../types/OrderRequestType';
import Order from '../types/OrderType';

function OrderController(app: Express) {
  app.post('/orders', (req: Request<OrderRequest>, res: Response) => {
    const order: OrderRequest = req.body;

    const receiptId = Date.now().toString();

    const orderItem: Order = {
      id: receiptId,
      price: order.totalPrice,
      orderKind: order.orderKind,
      status: '주문완료',
      menuItems: order.menuItems,
      createAt: new Date(),
      updateAt: new Date(),
    };

    orders.push(orderItem);

    res.status(201).send({ orderId: orderItem.id });
  });
}

export default OrderController;
