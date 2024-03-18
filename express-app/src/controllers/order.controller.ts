import { Express, Request, Response } from 'express';

import orders from '../database/orders.table';

import OrderRequest from '../types/OrderRequestType';
import Order from '../types/OrderType';

function OrderController(app: Express) {
  app.post('/orders', (req: Request<OrderRequest>, res: Response) => {
    const reqOrder: OrderRequest = req.body;

    const receiptId = Date.now().toString();

    const orderItem: Order = {
      id: receiptId,
      totalPrice: reqOrder.totalPrice,
      orderKind: reqOrder.orderKind,
      status: '주문완료',
      menuItems: reqOrder.menuItems,
      createAt: new Date(),
      updateAt: new Date(),
    };

    orders.push(orderItem);

    res.status(201).send({ orderId: orderItem.id });
  });

  app.get('/orders/:orderId', (req: Request, res: Response) => {
    const { orderId } = req.params;

    const order: Order | undefined = orders.find(
      (item: Order) => item.id === orderId,
    );

    if (!order) {
      res.status(404).send(`The order not Found - ${orderId}`);
    }

    res.send(order);
  });
}

export default OrderController;
