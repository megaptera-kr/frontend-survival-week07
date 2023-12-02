import { waitFor } from '@testing-library/react';
import { container } from 'tsyringe';
import fixtures from '../../fixtures';
import {
  DOMAIN_ACTION_TYPE,
  fetchResturants, payment, setOrder, setResturantsList, updateFetchStatus,
} from './domainReducer';
import { Order, RestaurantList } from '../../types';
import Store from '../store/BaseStore';
import { UI_ACTION_TYPE, addCart } from './uiReducer';
import receipt from '../../fixtures/receipt';

describe('domainReducer', () => {
  const store = container.resolve(Store);

  beforeEach(() => {
    store.cleanup();
  });

  test('SET_RESTURANTS_LIST 는 resturantsList 에 데이터를 저장한다.', async () => {
    await store.dispatch(setResturantsList(fixtures.restaurants as RestaurantList));

    await waitFor(() => {
      expect(store.getState().domain.resturantsList).toEqual(fixtures.restaurants);
    });
  });

  test('SET_ORDER 는 order 에 데이터를 저장한다.', async () => {
    await store.dispatch(setOrder(fixtures.receipt as Order));

    await waitFor(() => {
      expect(store.getState().domain.order).toEqual(fixtures.receipt);
    });
  });

  test('UPDATE_FETCH_STATUS 는 패치 상태를 업데이트한다.', () => {
    store.dispatch(updateFetchStatus('REQUEST'));

    expect(store.getState().ui.fetchStatus).toEqual('REQUEST');

    store.dispatch(updateFetchStatus('SUCCESS'));

    expect(store.getState().ui.fetchStatus).toEqual('SUCCESS');
  });

  test('fetchResturants 는 식당 목록 데이터를 불러오고, 이를 스토어에 저장한다', async () => {
    await store.dispatch(fetchResturants());
    await waitFor(() => {
      expect(store.getActions().has(DOMAIN_ACTION_TYPE.SET_RESTURANTS_LIST)).toBeTruthy();
    });
  });

  test('payment 는 담긴 상품을 결제 하고, 구매 내역을 저장한 다음 장바구니를 초기화 한다.', async () => {
    receipt.menu.slice(0, 3).map((menu) => store.dispatch(addCart(menu)));

    expect(store.getState().ui.cart.length).toBeTruthy();

    await store.dispatch(payment());

    await waitFor(() => {
      expect(store.getActions().has(DOMAIN_ACTION_TYPE.SET_ORDER)).toBeTruthy();
      expect(store.getActions().has(UI_ACTION_TYPE.SET_RECEIPT)).toBeTruthy();
    });
  });
});
