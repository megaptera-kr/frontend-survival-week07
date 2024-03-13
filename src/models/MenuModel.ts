import MenuType from '../types/MenuType';
import { moneyformat } from '../utils/common';

class MenuModel {
  #id: number;

  #name: string;

  #price: number;

  constructor({ id, name, price }: MenuType) {
    this.#id = id;
    this.#name = name;
    this.#price = price;
  }

  getId(): number {
    return this.#id;
  }

  getName(): string {
    return this.#name;
  }

  getPrice(): number {
    return this.#price;
  }

  getMoneyFormatPrice(): string {
    return moneyformat(this.#price);
  }

  getNamePrice(): string {
    return `${this.getName()} ${this.getMoneyFormatPrice()}원`;
  }
}

export default MenuModel;
