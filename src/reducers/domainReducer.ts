import {
  Order,
  RestaurantList,
} from '../../types';
import { IAction } from '../actions';
import { DOMAIN_ACTION_TYPE, DomainActionTypes, FetchStatusType } from '../actions/domainActions';
import { State } from '../store/BaseStore';

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
