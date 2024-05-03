import { useNavigate } from 'react-router';
import { FilterableRestaurantsTable, Receipt } from '../components';

function OrderPage() {
  const navigate = useNavigate();
  const goToIntro = () => navigate('/');
  const goToResult = (orderId:string) => navigate(`/order/complete?orderId=${orderId}`);

  return (
    <div>
      <FilterableRestaurantsTable />
      <Receipt goToIntro={goToIntro} goToResult={goToResult} />
    </div>
  );
}

export default OrderPage;
