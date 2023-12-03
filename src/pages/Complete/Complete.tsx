import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOrders } from '../../services/getOrders';

interface Food {
  id: string,
  name: string,
  price: number,
}

interface Order {
  id: string,
  menu: Food[],
  totalPrice: number,
}

export default function Complete() {
  const [menues, setMenues] = useState<Food[]>([]);
  const [allTotalPrice, setAllTotalPrice] = useState(0);
  const [searchParams] = useSearchParams();
  const ordersId = searchParams.get('ordersId');
  const getOrderDetail = async () => {
    if (!ordersId) {
      return;
    }

    const response = await getOrders(ordersId);
    const { order } : {order : Order} = response;
    const { menu, totalPrice } = order;
    setMenues([...menu]);
    setAllTotalPrice(totalPrice);
  };

  useEffect(() => {
    getOrderDetail();
  }, []);
  return (
    <>
      <h1>주문목록</h1>
      주문번호 :
      {' '}
      {ordersId}
      <ul className="cart-menu-list">
        {menues.map((item, itemIdx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`cart_${itemIdx}`}>
            <span>
              메뉴명 :
              {' '}
              {item.name}
            </span>
            <span>
              가격 :
              {' '}
              {item.price}
            </span>
          </li>
        ))}
      </ul>
      <p>
        합계 :
        {' '}
        {allTotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        {' '}
        원
        {' '}
      </p>
    </>
  );
}
