import Cart from '../components/Cart';
import FilterableRestaurant from '../components/FilterableRestaurant';

function Order() {
  return (
    <div>
      <div>
        <FilterableRestaurant />
        <Cart />
      </div>
    </div>
  );
}

export default Order;
