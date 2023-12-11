import {
  PostOrdersPayload, GetRestaurantsResponse, PostOrdersResponse, GetOrdersPayload, GetOrdersResponse,
} from '../../types';
import { Path, httpRequest } from '../../api';

export let fetchGetRestaurants = async () => {
  const res = await httpRequest<GetRestaurantsResponse>(Path.restaurants, 'get');
  return res;
};

export let fetchPostOrders = async (payload: PostOrdersPayload) => {
  const res = await httpRequest<PostOrdersResponse>(Path.orders, 'post', payload);

  return res;
};

export let fetchGetOrders = async (payload: GetOrdersPayload) => {
  const path = Path.getOrders.replace(':id', payload.id);
  console.log('path ->', path);
  const res = await httpRequest<GetOrdersResponse>(path, 'get');

  return res;
};

export let mocking = {
  fetchGetRestaurants,
  fetchPostOrders,
  fetchGetOrders,
};
