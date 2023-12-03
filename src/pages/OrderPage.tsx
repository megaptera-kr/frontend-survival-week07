import Categories from '../components/restaurants/Categories';

import SearchBar from '../components/restaurants/SearchBar';

import RestaurantTable from '../components/restaurants/RestaurantTable';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import useFilteredMenu from '../hooks/useFilteredMenu';

import Cart from '../components/cart';

export default function OrderPage() {
  const data = useFetchRestaurants();

  const restaurants = useFilteredMenu(data);

  return (
    <>
      <Categories />
      <Cart />
      <SearchBar
        htmlFor='input-검색'
        placeholder='식당 이름을 입력해 주세요.'
      />
      <RestaurantTable restaurants={restaurants} />
    </>
  );
}
