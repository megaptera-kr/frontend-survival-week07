import CategoryType from '../types/CategoryType';

class CategoryModel {
  #id: number;

  #name: string;

  constructor({ id, name }: CategoryType) {
    this.#id = id;
    this.#name = name;
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }
}

export default CategoryModel;
