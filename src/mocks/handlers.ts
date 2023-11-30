// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import restaurants from '../features/restaurants';

const BASE_URL = 'http://localhost:3000';

export const handlers = [
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => res(
    ctx.json({ restaurants }),
  )),
];
export default handlers;
