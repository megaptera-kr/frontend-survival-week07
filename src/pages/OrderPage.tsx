import FilterableRestaurantTable from '../components/Restaurant/FilterableRestaurantTable';
import Cart from '../components/Cart/Cart';

export default function OrderPage() {
  return (
    <div>
      <FilterableRestaurantTable />
      <Cart />
    </div>
  );
}
