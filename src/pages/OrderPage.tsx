import { useNavigate } from 'react-router';
import { FilterableRestaurantsTable, Receipt } from '../components';

function OrderPage() {
  const navigate = useNavigate();
  const goToIntro = () => navigate('/');

  return (
    <div>
      <FilterableRestaurantsTable />
      <Receipt goToIntro={goToIntro} />
    </div>
  );
}

export default OrderPage;
