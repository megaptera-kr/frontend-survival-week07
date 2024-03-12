import { Express, Request, Response } from 'express';

import Order from '../types/OrderType';
import Receipt from '../types/ReceiptType';

function OrderController(app: Express) {
  app.post('/orders', (req: Request<Order>, res: Response) => {
    const order: Order = req.body;

    const orderId = Date.now().toString();

    const response: Receipt = {
      id: orderId,
      menu: order.menu,
      totalPrice: order.totalPrice,
    };

    res.status(201).send(response);
  });
}

export default OrderController;
