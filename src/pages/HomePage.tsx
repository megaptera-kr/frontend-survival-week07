import { useNavigate } from 'react-router-dom';
import RestaurantOrderButton from '../components/home/RestaurantOrderButton';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <section className="w-full flex justify-center items-center gap-12">
      <RestaurantOrderButton
        name="매장 주문"
        handleClickOrder={() => navigate('/order')}
      />
      <RestaurantOrderButton
        name="전체 포장"
        handleClickOrder={() => navigate('/order')}
      />
    </section>
  );
}
