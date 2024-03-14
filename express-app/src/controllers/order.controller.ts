import { Express, Request, Response } from 'express';

import Order from '../types/OrderType';
import Receipt from '../types/ReceiptType';

function OrderController(app: Express) {
  app.post('/orders', (req: Request<Order>, res: Response) => {
    const order: Order = req.body;
    const response: Receipt = {
      id: Date.now().toString(),
      orderKind: order.orderKind,
      totalPrice: order.totalPrice,
      menuItems: order.menuItems,
    };

    res.status(201).send(response);
  });
}

export default OrderController;
