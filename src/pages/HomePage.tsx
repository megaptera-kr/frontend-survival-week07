import { useNavigate } from 'react-router-dom';
import RestaurantOrderButton from '../components/home/RestaurantOrderButton';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-12">
      <h2 className="font-extrabold text-3xl">원하시는 주문을 터치해주세요</h2>
      <div className="w-full flex gap-12 justify-center">
        <RestaurantOrderButton
          name="매장 주문"
          handleClickOrder={() => navigate('/order')}
        />
        <RestaurantOrderButton
          name="전체 포장"
          handleClickOrder={() => navigate('/order')}
        />
      </div>
    </section>
  );
}
