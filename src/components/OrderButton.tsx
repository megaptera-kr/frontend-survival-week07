import { useNavigate } from 'react-router-dom';
import Food from '../Types/Food';

type OrderButtonProps = {
    menu: Food[]
}

const url = 'http://localhost:3000/orders';

export default function OrderButton({ menu }: OrderButtonProps) {
  const navigate = useNavigate();

  const totalPrice = menu.reduce((acc: number, food) => acc + food.price, 0);

  const handleClickOrder = async () => {
    const res = await fetch(url, {
      method: 'POST',
      body: { menu, totalPrice },
    });
    const { id } = await res.json();

    navigate(`/order/complete?orderId=${id}`);
  };

  return (
    <button
      type="button"
      onClick={handleClickOrder}
    >
      주문하기
    </button>
  );
}
