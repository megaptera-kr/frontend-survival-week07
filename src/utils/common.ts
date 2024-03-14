import { ORDER_TYPE_STORE } from '../const/ConstOrder';
import OrderKindType from '../types/OrderKindType';

export function normalize(value?: string): string {
  if (!value) return '';
  return value.trim().toLocaleLowerCase();
}

export function moneyformat(value: number): string {
  return new Intl.NumberFormat().format(value);
}

export function validatePathFormat(path: string): void {
  if (!path.startsWith('/')) {
    throw new Error('Invalid path format');
  }
}

/**
 *
 * @param orderKind: buttonTitle of RootButton component
 * @returns number value that 0 is 매장 주문, 1 is 전체 포장
 */
export function getOrderKind(orderKind: OrderKindType): number {
  return orderKind === ORDER_TYPE_STORE ? 0 : 1;
}
