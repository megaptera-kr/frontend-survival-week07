import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { Food } from '../types/food';

@singleton()
@Store()
class CartStore {
  menu:Food[] = [];

  @Action()
  addCart(food:Food) {
    const newFood = {
      id: Date.now().toString(),
      name: food.name,
      price: food.price,
    };

    this.menu = [...this.menu, newFood];
  }

  @Action()
  removeCart(id:string) {
    const filteredMenu = this.menu.filter((food) => food.id !== id);
    this.menu = filteredMenu;
  }

  @Action()
  clearCart() {
    this.menu = [];
  }
}

export default CartStore;
