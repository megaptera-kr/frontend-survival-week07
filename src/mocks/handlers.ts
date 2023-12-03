// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import fixtures from '../../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const { restaurants } = fixtures;

    return res(
      ctx.status(200),
      ctx.json({ restaurants }),
    );
  }),

  rest.post(`${BASE_URL}/orders`, (req, res, ctx) => {
    const id = '1701590995319';

    return res(ctx.status(201), ctx.json({ id }));
  }),

  rest.get(`${BASE_URL}/orders/:id`, (req, res, ctx) => {
    const { receipt } = fixtures;

    return res(
      ctx.status(200),
      ctx.json({ receipt }),
    );
  }),

];

export default handlers;
