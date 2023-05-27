import CategorySearchFilter from '../components/CategorySearchFilter';
import RestaurantTable from '../components/RestaurantTable';
import OrderConfirm from '../components/OrderConfirm';

function useFechRestaurants() {
  return null;
  // throw new Error('Function not implemented.');
}

export default function MenuPage() {
  const restaurants = useFechRestaurants();
  return (
    <div>
      <CategorySearchFilter />
      <RestaurantTable />
      <OrderConfirm />
    </div>
  );
}
