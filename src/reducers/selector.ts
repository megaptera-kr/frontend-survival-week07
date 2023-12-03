import { RestaurantList } from '../../types';
import { State } from '../store/BaseStore';
import filterList, { createFilterKeyword } from '../utils/filterList';

export const getTotalPrice = (state: State) => state.ui.cart.reduce((prev, curr) => prev + curr.price, 0);

export const getFilteredResturants = (state: State) => filterList<RestaurantList>(state.domain.resturantsList, createFilterKeyword(state.ui.filterKeyword));
