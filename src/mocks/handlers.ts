// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import BASE_URL from '../api';
import fixture from '../fixture';

const { restaurants, order, food } = fixture;
const handlers = [
  // GET
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ restaurants }),
  )),
  rest.get(`${BASE_URL}/orders/:id`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ order }),
  )),

  // POST
  rest.post(`${BASE_URL}/orders`, (req, res, ctx) => res(
    ctx.status(201),
    ctx.json({ id: order.id }),
  )),
];

export default handlers;
