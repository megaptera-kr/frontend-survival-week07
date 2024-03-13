import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import RestaurantTable from '../components/RestaurantTable';
import Cart from '../components/Cart';
import useSetButton from '../hooks/useSetButton';

function OrderPage() {
  // const { state } = useLocation();
  // const buttonTitle = state?.buttonTitle;
  const [buttonName, setButtonName] = useSetButton('전체');

  return (
    <div>
      <SearchBar setButtonName={setButtonName} />
      <hr />
      <RestaurantTable categoryName={buttonName} restaurantName='' />
      <hr />
      <Cart />
    </div>
  );
}

export default OrderPage;
