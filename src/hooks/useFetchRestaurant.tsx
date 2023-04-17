import data from '../data';
import Restaurant from '../models/Restaurant';

export default function useFetchRestaurant(id?: string) {
  const initialData = {} as Restaurant;
  if (!id) {
    return initialData;
  }

  return data.restaurants.find((i) => i.id === parseInt(id, 10)) || initialData;
}
