import type { Food } from './food';

export interface Restaurant {
  id: number;
  category: string;
  name: string;
  menu: Food[];
}
