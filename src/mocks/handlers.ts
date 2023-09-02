/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import fixtures from '../../fixtures';

const BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const { restaurants } = fixtures;

    return res(
      ctx.status(200),
      ctx.json({ restaurants }),
    );
  }),

  rest.get(`${BASE_URL}/orders/:id`, (req, res, ctx) => {
    const { id } = req.params;
    const { order } = fixtures;

    if (id !== order.id) {
      return res(
        ctx.status(404),
        ctx.json({}),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ order }),
    );
  }),

  rest.post(`${BASE_URL}/orders`, (req, res, ctx) => {
    const id = Date.now().toString();

    return res(
      ctx.status(201),
      ctx.json({ id }),
    );
  }),
];

export default handlers;
