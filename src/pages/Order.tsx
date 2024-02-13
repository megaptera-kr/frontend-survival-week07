import FilterableRestaurantTable from '../components/restaurants/FilterableRestaurantTable';

import Cart from '../components/cart/Cart';

export default function Order() {
  return (
    <div>
      <h2>주문페이지</h2>
      <FilterableRestaurantTable />
      <Cart />
    </div>
  );
}
