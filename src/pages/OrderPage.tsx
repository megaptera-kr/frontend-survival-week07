import Cart from '../components/Cart';
import ConfirmButton from '../components/ConfirmButton';
import FilterableRestaurantsTable from '../components/FilterableRestaurantsTable';

export default function OrderPage() {
  return (
    <div>
      <FilterableRestaurantsTable />
      <Cart />
      <ConfirmButton />
    </div>
  );
}
