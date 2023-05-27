import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useFetchReceipt from '../hooks/useFetchReceipt';
import { Food } from '../types/restaurant';
import Button from '../components/common/button/Button';
import useCartStore from '../hooks/useCartStore';

type loaderRequest = {
  request: Request
}
export async function loader({ request }: loaderRequest) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('orderId') || '';
  const receipt = useFetchReceipt(searchTerm);
  return receipt;
}

type CompleteLoaderData = {
  id: string;
  menu: Food[];
  totalPrice: number;
}

export default function Complete() {
  const [, cartStore] = useCartStore();
  const navigate = useNavigate();
  const loaderData = useLoaderData() as CompleteLoaderData;

  useEffect(() => {
    cartStore.reset();
  }, []);

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>
      <p>{`주문번호 ${loaderData.id}`}</p>
      <h3>주문목록</h3>
      <ul>
        {loaderData.menu.map((food: Food, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${food.id}-${index}`}>
            {`${food.name} ${food.price.toLocaleString('ko-kr')}원`}
          </li>
        ))}
      </ul>
      <p>{`총 가격 ${loaderData.totalPrice.toLocaleString('ko-kr')}원`}</p>
      <Button
        onClick={handleClick}
      >
        메인화면으로 돌아가기
      </Button>
    </div>
  );
}
