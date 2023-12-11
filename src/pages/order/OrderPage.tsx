import Typo from '../../components/Typo';
import Cart from '../../containers/Cart';
import RestaurantsSearch from '../../containers/RestaurantsSearch';
import Restaurants from '../../containers/Resturants';

function OrderPage() {
  return (
    <div data-testid="OrderPage" className="order-wrapper">
      <section className="header">
        <RestaurantsSearch />
        <p>
          <Typo level={2}>점심 바구니</Typo>
        </p>
      </section>
      <section className="content">
        <Restaurants />
        <Cart />
      </section>
    </div>
  );
}

export default OrderPage;
