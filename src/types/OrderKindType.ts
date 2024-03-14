import { ORDER_TYPE_PACKAGE, ORDER_TYPE_STORE } from '../const/ConstOrder';

export type OrderKindType = typeof ORDER_TYPE_STORE | typeof ORDER_TYPE_PACKAGE;

export default OrderKindType;
