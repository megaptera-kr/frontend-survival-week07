import { container } from 'tsyringe';
import Store from '../store/BaseStore';
import {
  addCart, clearCart, clearReceipt, deleteCart, setReceipt,
} from './uiReducer';
import fixtures from '../../fixtures';

describe('uiReducer', () => {
  const store = container.resolve(Store);

  beforeEach(() => store.cleanup());

  const [menu] = fixtures.receipt.menu;

  test('ADD_CART 액션은 메뉴를 받아, cart 데이터에 추가한다.', () => {
    store.dispatch(addCart(menu));

    expect(store.getState().ui.cart.length).toBeTruthy();
  });

  test('DELETE_CART 액션은 메뉴를 받아, cart 데이터에서 제거한다.', () => {
    store.dispatch(addCart(menu));

    expect(store.getState().ui.cart.length).toBeTruthy();

    store.dispatch(deleteCart(menu));

    expect(store.getState().ui.cart.length).toBeFalsy();
  });

  test('CLEAR_CART 액션은 cart 초기화한다.', () => {
    fixtures.receipt.menu.forEach((menu) => store.dispatch(addCart(menu)));

    expect(store.getState().ui.cart.length).toBe(fixtures.receipt.menu.length);

    store.dispatch(clearCart());

    expect(store.getState().ui.cart.length).toBeFalsy();
  });

  test('SET_RECEIPT 액션은 주문 내역을 받아, receipt 데이터에 추가한다.', () => {
    store.dispatch(setReceipt(fixtures.receipt));

    expect(store.getState().ui.receipt).toEqual(fixtures.receipt);
  });

  test('CLEAR_RECEIPT 액션은 주문 내역을 비운다.', () => {
    store.dispatch(setReceipt(fixtures.receipt));

    expect(store.getState().ui.receipt).toEqual(fixtures.receipt);

    store.dispatch(clearReceipt());

    expect(store.getState().ui.receipt).toBe(null);
  });
});
