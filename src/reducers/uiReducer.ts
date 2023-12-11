import { Menu, Order } from '../../types';
import { UIActionTypes, UI_ACTION_TYPE } from '../actions/uiActions';
import { FilterKeyword } from '../store/BaseStore';
import { ReducersType } from './domainReducer';

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
  [UI_ACTION_TYPE.SET_RECEIPT](state, action) {
    return {
      ...state,
      ui: {
        ...state.ui,
        receipt: action.payload as Order,
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
  [UI_ACTION_TYPE.SET_FILTER_KEYWORD](state, action) {
    return {
      ...state,
      ui: {
        ...state.ui,
        filterKeyword: action.payload as FilterKeyword,
      },
    };
  },
};

export default reducers;
