import { useState } from 'react';
import { useNavigate } from 'react-router';
import useRestaurants from '../hooks/useRestaurants';
import useCartStore from '../hooks/useCartStore';
import { Food } from '../types';
import useCreateOrder from '../hooks/useCreateOrder';

export default function HomePage() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const { restaurants } = useRestaurants({
    keyword: keyword.trim(), category: selectedCategory,
  });
  const [, store] = useCartStore();

  const handleClickFood = (food: Food) => {
    store.addCart(food);
  };
  return (
    <main>
      <div>
        <div>
          <div>
            <div>
              <label htmlFor="restaurant">검색</label>
              <input id="restaurant" type="text" placeholder="식당 이름을 입력해주세요" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            </div>
            <div>
              <button type="button" onClick={() => setSelectedCategory('전체')}>전체</button>
              <button type="button" onClick={() => setSelectedCategory('중식')}>중식</button>
              <button type="button" onClick={() => setSelectedCategory('한식')}>한식</button>
              <button type="button" onClick={() => setSelectedCategory('일식')}>일식</button>
            </div>
          </div>
          <table>
            <tbody>
              {
                restaurants.map((restaurant) => (
                  <tr key={restaurant.id}>
                    <td>{restaurant.name}</td>
                    <td>
                      <div style={{ paddingBlock: '1rem' }}>
                        {
                          restaurant.menu.map((menu) => (
                            <div key={`${restaurant.id}-${menu.id}`}>
                              <button type="button" onClick={() => handleClickFood(menu)}><span>{`${menu.name} ${menu.price.toLocaleString()}원`}</span></button>
                            </div>
                          ))
                        }
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div>
          <div>
            <span>
              주문내역
              {store.count}
              개
            </span>
          </div>
          <div>
            총 결제 예상금액
            {store.totalPrice.toLocaleString()}
            원
          </div>
          <ul>
            {
              store.cart.map((menu, index) => (
                <div key={`menu-${menu.id}`}>
                  <span>{`${menu.name} ${menu.price.toLocaleString()}원`}</span>
                  <button type="button" onClick={() => store.removeCart(index)}>X</button>
                </div>
              ))
            }
          </ul>
          <div>
            <button
              type="button"
              onClick={() => {
                store.resetCart();
                navigate('/');
              }}
            >
              취소
            </button>
            <button
              type="button"
              onClick={async () => {
                const id = await useCreateOrder(store.cart, store.totalPrice);
                navigate(`/order/complete?orderId=${id}`);
              }}
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
