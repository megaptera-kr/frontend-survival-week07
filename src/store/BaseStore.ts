import { singleton } from 'tsyringe';
import { IAction } from './actions';
import rootReducer from '../reducers';
import {
  MenuList, Order, Receipt, RestaurantList,
} from '../../types';
import { FetchStatusType } from '../actions/domainActions';

export type FilterKeyword = {
  name: string;
  category: string;
}

interface IState {
  domain: {
    resturantsList: RestaurantList;
    order: Order | null;
  };
  ui: {
    fetchStatus: FetchStatusType | null;
    cart: MenuList;
    receipt: Receipt | null;
    filterKeyword: FilterKeyword
  }
}

export const initialState: IState = {
  domain: {
    resturantsList: [],
    order: null,
  },
  ui: {
    fetchStatus: null,
    cart: [],
    receipt: null,
    filterKeyword: {
      name: '',
      category: '',
    },
  },
};

export type State = typeof initialState;

export type DispatchType = <Payload>(action: IAction<Payload>) => void;
export type GetStateType = () => State;

export type AsyncAction = (dispatch: DispatchType, getState: GetStateType) => Promise<void>;

type Listener = () => void;

@singleton()
class Store {
  state = initialState;

  actions: Set<any> = new Set();

  listeners = new Set<Listener>();

  reducer<Payload>(state: State, action: IAction<Payload> | AsyncAction): State {
    if (typeof action === 'function') {
      action(this.dispatch, this.getState);
      return state;
    }

    const r = rootReducer[action.type];

    if (r) {
      const newState = r(state, action);

      this.actions.add(action.type);

      // this.logger(state, newState, action);

      return newState;
    }

    return state;
  }

  getState = () => this.state;

  getActions = () => this.actions;

  dispatch = <Payload>(action: IAction<Payload> | AsyncAction): void => {
    this.state = this.reducer<Payload>(this.state, action);
    this.publish();
  };

  publish(): void {
    this.listeners.forEach((listener) => listener());
  }

  addListener(listener: Listener): void {
    this.listeners.add(listener);
  }

  removeListener(listener: Listener): void {
    this.listeners.delete(listener);
  }

  cleanup = () => {
    this.state = initialState;
    this.actions.clear();
    this.listeners.clear();
  };

  logger<Payload>(oldState: State, newState: State, action: IAction<Payload>) {
    console.group(`[[ ${action.type} ]]`);
    console.log('old ->', oldState);
    console.log('new ->', newState);
    console.groupEnd();
  }
}

export default Store;
