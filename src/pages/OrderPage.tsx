import Cart from '../components/Cart';
import FilterableRestaurantTable from '../components/FilterableRestaurantTable';

export default function OrderPage() {
  return (
    <div>
      <FilterableRestaurantTable />
      <Cart />
    </div>
  );
}
