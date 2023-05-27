// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import fixtures from '../../fixtures';

const handlers = [
  rest.get('http://localhost:3000/restaurants', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ restaurants: fixtures.restaurants }),
  )),
  rest.get('http://localhost:3000/orders/*', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      order: {
        id: '123412123',
        menu: [
          { id: 1, name: '짜장면', price: 1_000 },
          { id: 2, name: '짬뽕', price: 1_000 },
        ],
        totalPrice: 2_000,
      },
    }),
  )),
];

export default handlers;
