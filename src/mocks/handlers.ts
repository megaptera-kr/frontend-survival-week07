// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import restaurants from '../features/restaurants';
import orders from '../features/orders';

const BASE_URL = 'http://localhost:3000';

export const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => res(
    ctx.json({ restaurants }),
  )),
  rest.get(`${BASE_URL}/orders`, (req, res, ctx) => res(
    ctx.json({ orders }),
  )),
];
export default handlers;
