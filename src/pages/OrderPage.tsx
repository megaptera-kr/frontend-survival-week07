import CartField from '../components/CartField';
import FilterableRestaurantTable from '../components/FilterableRestaurantTable';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function OrderPage() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <FilterableRestaurantTable restaurants={restaurants} />
      <CartField />
    </div>
  );
}
