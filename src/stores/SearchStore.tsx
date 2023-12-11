import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import Categories from '../types/Catgories';

@singleton()
@Store()
export default class SearchStore {
  category: Categories = '전체';

  query = '';

  @Action()
  setCategories(category: Categories) {
    this.category = category;
  }

  @Action()
  setQuery(query: string) {
    this.query = query;
  }

  @Action()
  clear() {
    this.query = '';
    this.category = '전체';
  }
}
