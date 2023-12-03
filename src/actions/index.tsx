import { DomainActionTypes } from './domainActions';
import { UIActionTypes } from './uiActions';

type ActionType = DomainActionTypes | UIActionTypes;

export interface IAction<Payload> {
  type: ActionType;
  payload?: Payload;
}
