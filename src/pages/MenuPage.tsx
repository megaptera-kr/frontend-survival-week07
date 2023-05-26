import CategorySearchFilter from '../components/CategorySearchFilter';
import RestaurantTable from '../components/RestaurantTable';
import OrderConfirm from '../components/OrderConfirm';

export default function MenuPage() {
  return (
    <div>
      <CategorySearchFilter />
      <RestaurantTable />
      <OrderConfirm />
    </div>
  );
}
