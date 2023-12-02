import { Menu, Order } from '../../types';
import { State } from '../store/BaseStore';
import { ReducersType } from './domainReducer';

export const UI_ACTION_TYPE = {
  ADD_CART: 'ADD_CART',
  DELETE_CART: 'DELETE_CART',
  CLEAR_CART: 'CLEAR_CART',
  SET_RECEIPT: 'SET_RECEIPT',
  CLEAR_RECEIPT: 'CLEAR_RECEIPT',
} as const;

export const addCart = (payload: Menu) => ({ type: UI_ACTION_TYPE.ADD_CART, payload });
export const deleteCart = (payload: Menu) => ({ type: UI_ACTION_TYPE.DELETE_CART, payload });
export const clearCart = () => ({ type: UI_ACTION_TYPE.CLEAR_CART });
export const setReceipt = (payload: Order) => ({ type: UI_ACTION_TYPE.SET_RECEIPT, payload });
export const clearReceipt = () => ({ type: UI_ACTION_TYPE.CLEAR_RECEIPT });

export type UIActionTypes = typeof UI_ACTION_TYPE[keyof typeof UI_ACTION_TYPE];

export const getTotalPrice = (state: State) => state.ui.cart.reduce((prev, curr) => prev + curr.price, 0);

const reducers: ReducersType<UIActionTypes> = {
  [UI_ACTION_TYPE.ADD_CART](state, action) {
    const selectedMenu = action.payload as Menu;
    return {
      ...state,
      ui: {
        ...state.ui,
        cart: [...state.ui.cart, selectedMenu],
      },
    };
  },
  [UI_ACTION_TYPE.DELETE_CART](state, action) {
    const selectedMenu = action.payload as Menu;
    return {
      ...state,
      ui: {
        ...state.ui,
        cart: state.ui.cart.filter((menu) => menu.id !== selectedMenu.id),
      },
    };
  },
  [UI_ACTION_TYPE.CLEAR_CART](state) {
    return {
      ...state,
      ui: {
        ...state.ui,
        cart: [],
      },
    };
  },
  [UI_ACTION_TYPE.SET_RECEIPT](state, payload) {
    return {
      ...state,
      ui: {
        ...state.ui,
        receipt: payload.payload as Order,
      },
    };
  },
  [UI_ACTION_TYPE.CLEAR_RECEIPT](state) {
    return {
      ...state,
      ui: {
        ...state.ui,
        receipt: null,
      },
    };
  },
};

export default reducers;
