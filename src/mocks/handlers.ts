/* eslint-disable import/no-extraneous-dependencies */
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
  rest.post(`${BASE_URL}/orders/:id`, (req, res, ctx) => {
    const { id } = fixtures.order;

    return res(
      ctx.status(201),
      ctx.json({ id }),
    );
  }),
  rest.get(`${BASE_URL}/orders/:id`, (req, res, ctx) => {
    const { order } = fixtures;

    return res(
      ctx.status(200),
      ctx.json({ order }),
    );
  }),
];

export default handlers;
