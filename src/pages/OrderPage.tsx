import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import FilterableRestaurantTable from '../components/FilterableRestaurantTable';
import Cart from '../components/Cart';

function OrderPage() {
  // const { state } = useLocation();
  // const buttonTitle = state?.buttonTitle;

  return (
    <div>
      <SearchBar />
      <hr />
      <FilterableRestaurantTable />
      <hr />
      <Cart />
    </div>
  );
}

export default OrderPage;
