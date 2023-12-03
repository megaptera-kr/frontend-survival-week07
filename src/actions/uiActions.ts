import { Menu, Order } from '../../types';
import { FilterKeyword } from '../store/BaseStore';

export const UI_ACTION_TYPE = {
  ADD_CART: 'ADD_CART',
  DELETE_CART: 'DELETE_CART',
  CLEAR_CART: 'CLEAR_CART',
  SET_RECEIPT: 'SET_RECEIPT',
  CLEAR_RECEIPT: 'CLEAR_RECEIPT',
  SET_FILTER_KEYWORD: 'SET_FILTER_KEYWORD',
} as const;

export const addCart = (payload: Menu) => ({ type: UI_ACTION_TYPE.ADD_CART, payload });
export const deleteCart = (payload: Menu) => ({ type: UI_ACTION_TYPE.DELETE_CART, payload });
export const clearCart = () => ({ type: UI_ACTION_TYPE.CLEAR_CART });
export const setReceipt = (payload: Order) => ({ type: UI_ACTION_TYPE.SET_RECEIPT, payload });
export const clearReceipt = () => ({ type: UI_ACTION_TYPE.CLEAR_RECEIPT });
export const setFilterKeyword = (payload: Partial<FilterKeyword>) => ({ type: UI_ACTION_TYPE.SET_FILTER_KEYWORD, payload });

export type UIActionTypes = typeof UI_ACTION_TYPE[keyof typeof UI_ACTION_TYPE];
