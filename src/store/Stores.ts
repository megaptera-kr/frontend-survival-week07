import { singleton } from 'tsyringe';
import BaseStore, { Action } from './BaseStore';

const emptyCart = [] as string[];
const initialState = {
  Text: '',
  Category: '전체',
  selectedFood: emptyCart,
  getID: '',
  Receipt: '',
};

export type State = typeof initialState

export function inputText(payload:string) {
  return { type: 'TEXT', payload };
}

export function inputCategory(payload:string) {
  return { type: 'CATEGORY', payload };
}

export function inputFood(payload:string) {
  return { type: 'ADDFOOD', payload };
}

export function deleteFood(payload:string) {
  return { type: 'DELFOOD', payload };
}

export function insertID(payload:string) {
  return { type: 'INSERTID', payload };
}

export function insertReceipt(payload:string) {
  return { type: 'INSERTRECEIPT', payload };
}

function reducer(state:State, action:Action) {
  switch (action.type) {
  case 'TEXT':
    return {
      ...state, Text: action.payload,
    };
  case 'CATEGORY':
    return {
      ...state, Category: action.payload,
    };
  case 'ADDFOOD':
    return {
      ...state, selectedFood: [...state.selectedFood, action.payload],
    };
  case 'DELFOOD':
    return {
      ...state,
      selectedFood: (state.selectedFood).filter((Food, index) => (
        index !== Number(action.payload)
      )),
    };
  case 'INSERTID':
    return {
      ...state, getID: action.payload,
    };
  case 'INSERTRECEIPT':
    return {
      ...state, Receipt: action.payload,
    };
  default:
    return state;
  }
}

@singleton()
export default class Store extends BaseStore<State> {
  constructor() {
    super(initialState, reducer);
  }
}
