// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import BASE_URL from '../api';
import fixture from '../fixture';

const { order } = fixture;
const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const { restaurants } = fixture;
    return res(ctx.status(200), ctx.json(restaurants));
  }),
  // TODO: post, get의 queryString 이용해서 요청하는 방법 알아내기
  // rest.post(`${BASE_URL}/orders/complete?orderId`, (req, res, ctx) => {
  //   const orderId = req.url.searchParams.get('orderId');
  //   return res(ctx.status(201), ctx.json({ orderId }));
  // }),
  // rest.get(`${BASE_URL}/orders/${order.id}`,
  // (req, res, ctx) => res(ctx.status(201), ctx.json(order))),
];

export default handlers;
