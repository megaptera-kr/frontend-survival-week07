import { useLocation, useNavigate } from 'react-router';

import { useEffect } from 'react';
import useCartStore from '../hooks/useCartStore';
import useSetButton from '../hooks/useSetButton';
import useSearchText from '../hooks/useSearchText';

import SearchBar from '../components/SearchBar';
import RestaurantTable from '../components/RestaurantTable';
import Cart from '../components/Cart';

function OrderPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [, cartStore] = useCartStore();

  const orderKindType = state?.orderKindType;

  useEffect(() => {
    if (orderKindType !== '매장 주문' && orderKindType !== '전체 포장') {
      navigate('/');
    } else {
      cartStore.setOrderKind(orderKindType);
    }
  }, [orderKindType, cartStore]);

  const [searchText, setSearchText] = useSearchText('');
  const [buttonName, setButtonName] = useSetButton('전체');

  return (
    <div style={{ maxWidth: '500px' }}>
      <div>[{orderKindType}] 주문입니다</div>
      <hr />
      <SearchBar setSearchText={setSearchText} setButtonName={setButtonName} />
      <hr />
      <RestaurantTable restaurantName={searchText} categoryName={buttonName} />
      <hr />
      <Cart />
    </div>
  );
}

export default OrderPage;
