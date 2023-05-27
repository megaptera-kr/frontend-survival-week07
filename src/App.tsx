import { Route, Routes } from 'react-router-dom';
import useStore from './hooks/useStore';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import ReceiptPage from './pages/ReceiptPage';

export default function App() {
  const store = useStore();
  console.log(store.state.getID);
  return (
    <div>
      <h1>메가테라 푸드코트 키오스크</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order/complete" element={<ReceiptPage />} />
      </Routes>
    </div>
  );
}
