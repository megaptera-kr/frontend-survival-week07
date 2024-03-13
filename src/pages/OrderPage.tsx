import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import useSetButton from '../hooks/useSetButton';
import useSearchText from '../hooks/useSearchText';

import SearchBar from '../components/SearchBar';
import RestaurantTable from '../components/RestaurantTable';
import Cart from '../components/Cart';

function OrderPage() {
  // const { state } = useLocation();
  // const buttonTitle = state?.buttonTitle;
  const [searchText, setSearchText] = useSearchText('');
  const [buttonName, setButtonName] = useSetButton('전체');

  return (
    <div>
      <SearchBar setSearchText={setSearchText} setButtonName={setButtonName} />
      <hr />
      <RestaurantTable restaurantName={searchText} categoryName={buttonName} />
      <hr />
      <Cart />
    </div>
  );
}

export default OrderPage;
