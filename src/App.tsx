// 1. 영수증 5초 구현 [x]
// 2. 로컬 스토리지 상태 관리 [x]
// 3. 라우터 실습
// 4. 테스트 코드 작성

import { useInterval, useLocalStorage } from 'usehooks-ts';

import Cart from './components/Cart/Cart';
import ReceiptPrint from './components/Receipt/ReceiptPrinter';
import FilterableRestaurantTable from './components/Restaurant/FilterableRestaurantTable';

import useFetchRestaurants from './hooks/useFetchRestaurants';
import Receipt from './types/Receipt';

const emptyReceipt = {} as Receipt;

export default function App() {
  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', emptyReceipt);

  const restaurants = useFetchRestaurants();

  useInterval(
    () => {
      setReceipt(emptyReceipt);
    },
    receipt ? 5000 : null,
  );

  return (
    <div>
      <h2>점심 바구니</h2>
      <Cart setReceipt={setReceipt} />
      <FilterableRestaurantTable restaurants={restaurants} />
      <ReceiptPrint receipt={receipt} />
    </div>
  );
}
