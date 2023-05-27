import { useLocalStorage } from 'usehooks-ts';

import Cart from './components/Cart/Cart';
import ReceiptPrint from './components/Receipt/ReceiptPrinter';
import FilterableRestaurantTable from './components/Restaurant/FilterableRestaurantTable';

import useFetchRestaurants from './hooks/useFetchRestaurants';
import Receipt from './types/Receipt';

const emptyReceipt = {} as Receipt;

export default function App() {
  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', emptyReceipt);

  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h2>점심 바구니</h2>
      <Cart setReceipt={setReceipt} />
      <FilterableRestaurantTable restaurants={restaurants} />
      <ReceiptPrint receipt={receipt} />
    </div>
  );
}
