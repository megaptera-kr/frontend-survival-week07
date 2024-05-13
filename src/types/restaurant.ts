import { Category } from './category';
import { Food } from './food';

export type Restaurant = {
  id:string;
  category:Category;
  name:string;
  menu:Food[],
}
