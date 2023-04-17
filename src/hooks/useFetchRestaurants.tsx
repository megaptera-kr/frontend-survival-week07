import data from '../data';
import Restaurant from '../models/Restaurant';

export default function useFetchRestaurants(): Restaurant[] {
  return data.restaurants;
}
