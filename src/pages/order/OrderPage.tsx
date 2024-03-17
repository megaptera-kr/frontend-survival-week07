import CartContainer from './components/Cart/CartContainer';
import RestaurantContainer from './components/Restaurant/RestaurantContainer';

export default function OrderPage() {
  return (
    <div>
      <RestaurantContainer />
      <CartContainer />
    </div>
  );
}
