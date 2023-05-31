import { useFetch } from 'usehooks-ts';
import CategorySearchFilter from '../components/CategorySearchFilter';
import RestaurantTable from '../components/RestaurantTable';
import OrderConfirm from '../components/OrderConfirm';
import Restaurant from '../types/Restaurant';

function useFechRestaurants() {
  // const restaurants = useFetch<Restaurant[]>('http://localhost:3000/restaurants');
  return null;
  // return restaurants;
  // throw new Error('Function not implemented.');
}

export default function MenuPage() {
  const restaurants = useFechRestaurants();
  console.log(restaurants);
  return (
    <div>
      <CategorySearchFilter />
      <RestaurantTable />
      <OrderConfirm />
    </div>
  );
}
