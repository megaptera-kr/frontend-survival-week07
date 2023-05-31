/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import fixtures from '../../fixtures';
import { OrderMenu } from '../types/cart';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const { restaurants } = fixtures;

    return res(
      ctx.status(200),
      ctx.json({ restaurants }),
    );
  }),

  rest.post(`${BASE_URL}/orders`, async (req, res, ctx) => {
    const { menu, totalPrice } = await req.json<OrderMenu>();

    const order = {
      id: '12345678910',
      menu,
      totalPrice,
    };

    return res(
      ctx.status(201),
      ctx.json({ id: order.id }),
    );
  }),

  rest.get(`${BASE_URL}/orders/:id`, async (req, res, ctx) => {
    const { id } = req.params;

    const order = {
      id,
      menu: fixtures.order.menu,
      totalPrice: fixtures.order.totalPrice,
    };

    return res(
      ctx.status(200),
      ctx.json({ order }),
    );
  }),
];

export default handlers;
