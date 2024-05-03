import { Food } from './food';

type OrderType = {
  id:string;
  menu:Food[],
  totalPrice:number
}

export default OrderType;
