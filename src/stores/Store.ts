import { singleton } from 'tsyringe';

import BaseStore, { Action } from './BaseStore';
import { Menu } from '../types';

export type State = {
  order : Menu[]
}

const initialState :State = {
  order: [],
};

function addOrderList(state: State, action: Action<Menu>) {
  return {
    ...state,
    order: [...state.order, action.payload],
  };
}

function deleteOrderList(state: State, action: Action<number>) {
  return {
    ...state,
    order: state.order.filter((_, i) => i !== action.payload),
  };
}

const reducers = {
  addOrderList,
  deleteOrderList,
};

@singleton()
export default class Store extends BaseStore<State> {
  constructor() {
    super(initialState, reducers);
  }
}
