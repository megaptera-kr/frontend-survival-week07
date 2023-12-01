import { useState } from 'react';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import extractCategories from '../utils/extractCategories';
import { Menu } from '../types';
import SearchInput from '../components/SearchInput';
import CategoryButtons from '../components/CategoryButtons';
import Cart from '../components/Cart';
import filterRestaurants from '../utils/filterRestaurants';

function Order() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('전체');
  const [orderList, setOrderList] = useState<Menu[]>([]);

  const restaurants = useFetchRestaurants();
  const categories = extractCategories(restaurants);

  const handleAddOrder = (menu : Menu) => {
    setOrderList([...orderList, menu]);
  };

  const handleDeleteOrder = (index : number) => {
    setOrderList(orderList
      .filter((_, i) => index !== i));
  };

  const filteredRestaurants = filterRestaurants(restaurants, {
    query, category,
  });

  return (
    <div>
      <div>
        <SearchInput query={query} setQuery={setQuery} />
        <CategoryButtons setCategory={setCategory} categories={categories} />
        <table>
          <tbody>
            {filteredRestaurants.map((restaurant) => (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>
                  <ul>
                    {restaurant.menu.map((food) => (
                      <li key={food.id}>
                        <button type="button" onClick={() => handleAddOrder(food)}>
                          {food.name}
                          {' '}
                          {food.price.toLocaleString()}
                          원
                        </button>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Cart orderList={orderList} handleDeleteOrder={handleDeleteOrder} />
      </div>
    </div>
  );
}

export default Order;
