import {
  MenuList,
  Order,
  RestaurantList,
} from '../../types';
import { DispatchType, State } from '../store/BaseStore';
import { IAction } from '../store/actions';
import { fetchGetOrders, fetchGetRestaurants, fetchPostOrders } from '../utils/apiService';
import { clearCart, setReceipt } from './uiReducer';

export const DOMAIN_ACTION_TYPE = {
  SET_RESTURANTS_LIST: 'SET_RESTURANTS_LIST',
  SET_ORDER: 'SET_ORDER',
  UPDATE_FETCH_STATUS: 'UPDATE_FETCH_STATUS',
} as const;

export const FETCH_STATUS = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
} as const;

export type DomainActionTypes = typeof DOMAIN_ACTION_TYPE[keyof typeof DOMAIN_ACTION_TYPE];

export type FetchStatusType = typeof FETCH_STATUS[keyof typeof FETCH_STATUS];

export const setResturantsList = (payload: RestaurantList) => ({ type: DOMAIN_ACTION_TYPE.SET_RESTURANTS_LIST, payload });

export const setOrder = (payload: Order) => ({ type: DOMAIN_ACTION_TYPE.SET_ORDER, payload });

export const updateFetchStatus = (payload: FetchStatusType) => ({ type: DOMAIN_ACTION_TYPE.UPDATE_FETCH_STATUS, payload });

export const fetchResturants = () => async (dispatch: DispatchType, getState: () => State) => {
  try {
    dispatch(updateFetchStatus(FETCH_STATUS.REQUEST));

    const { data: { restaurants } } = await fetchGetRestaurants();

    dispatch<RestaurantList>(setResturantsList(restaurants));

    dispatch(updateFetchStatus(FETCH_STATUS.SUCCESS));
  } catch (error) {
    dispatch(updateFetchStatus(FETCH_STATUS.FAIL));
  }
};

const createOrders = (menuList: MenuList) => {
  const receiptData = menuList.reduce<{menu: MenuList; totalPrice: number;}>(
    (prev, curr) => {
      prev.menu.push(curr);
      prev.totalPrice += curr.price;
      return prev;
    },
    {
      menu: [],
      totalPrice: 0,
    },
  );

  return receiptData;
};

export const payment = () => async (dispatch: DispatchType, getState: () => State) => {
  try {
    dispatch(updateFetchStatus(FETCH_STATUS.REQUEST));
    const { ui: { cart } } = getState();

    const postOrdersPayload = createOrders(cart);

    const { data: { id } } = await fetchPostOrders(postOrdersPayload);

    const { data: { order } } = await fetchGetOrders({ id });

    dispatch<Order>(setOrder(order));
    dispatch<Order>(setReceipt(order));

    dispatch(clearCart());

    dispatch(updateFetchStatus(FETCH_STATUS.SUCCESS));
  } catch (error) {
    dispatch(updateFetchStatus(FETCH_STATUS.FAIL));
  }
};

export type ReducersType<ActionType extends string | number | symbol> = Record<ActionType, <Payload>(state: State, action: IAction<Payload>) => State>;

const reducers: ReducersType<DomainActionTypes> = {
  [DOMAIN_ACTION_TYPE.SET_RESTURANTS_LIST](state, action) {
    return {
      ...state,
      domain: {
        ...state.domain,
        resturantsList: action.payload as RestaurantList,
      },
    };
  },
  [DOMAIN_ACTION_TYPE.SET_ORDER](state, action) {
    return {
      ...state,
      domain: {
        ...state.domain,
        order: action.payload as Order,
      },
    };
  },
  [DOMAIN_ACTION_TYPE.UPDATE_FETCH_STATUS](state, action) {
    return {
      ...state,
      ui: {
        ...state.ui,
        fetchStatus: action.payload as FetchStatusType,
      },
    };
  },
};

export default reducers;
