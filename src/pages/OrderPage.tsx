import { useLocation } from 'react-router';

import useSetButton from '../hooks/useSetButton';
import useSearchText from '../hooks/useSearchText';

import SearchBar from '../components/SearchBar';
import RestaurantTable from '../components/RestaurantTable';
import Cart from '../components/Cart';

function OrderPage() {
  const { state } = useLocation();
  const orderKindType = state?.orderKindType;
  const [searchText, setSearchText] = useSearchText('');
  const [buttonName, setButtonName] = useSetButton('전체');

  return (
    <div style={{ maxWidth: '500px' }}>
      <div>[{orderKindType}] 주문입니다</div>
      <SearchBar setSearchText={setSearchText} setButtonName={setButtonName} />
      <hr />
      <RestaurantTable restaurantName={searchText} categoryName={buttonName} />
      <hr />
      <Cart />
    </div>
  );
}

export default OrderPage;
