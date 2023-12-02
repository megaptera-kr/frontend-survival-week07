import { DOMAIN_ACTION_TYPE } from '../reducers/domainReducer';
import { UIActionTypes } from '../reducers/uiReducer';

type ActionType = typeof DOMAIN_ACTION_TYPE[keyof typeof DOMAIN_ACTION_TYPE] | UIActionTypes;

export interface IAction<Payload> {
  type: ActionType;
  payload?: Payload;
}
