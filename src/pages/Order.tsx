import { useLoaderData, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '../components/common/button/Button';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import filterCategories from '../utils/filterCategories';
import { Restaurant } from '../types/restaurant';
import filterRestaurants from '../utils/filterRestaurants';
import useCartStore from '../hooks/useCartStore';
import FilterRestaurants from '../components/FilterRestaurants';
import RestaurantsTable from '../components/RestaurantsTable';
import Cart from '../components/Cart';
import useCreateReceipt from '../hooks/useCreateReceipt';

export async function loader() {
  const restaurants = useFetchRestaurants();
  return restaurants;
}

export default function Order() {
  const restaurants = useLoaderData() as Restaurant[];
  const [, cartStore] = useCartStore();
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');
  const navigate = useNavigate();

  const categories = filterCategories(restaurants);
  const handleCancel = () => {
    cartStore.reset();
    navigate('/');
  };

  const handleOrderSubmit = async () => {
    const createReceiptId = await useCreateReceipt(cartStore.cart);
    navigate(`/order/complete?orderId=${createReceiptId}`);
  };

  // eslint-disable-next-line max-len
  const filteredRestaurants = filterRestaurants(restaurants, { text: filterText, category: filterCategory });

  return (
    <div>
      <FilterRestaurants
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
        categories={categories}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
      <Cart />
      <div>
        <Button
          onClick={handleCancel}
        >
          취소
        </Button>
        <Button
          onClick={handleOrderSubmit}
        >
          주문하기

        </Button>
      </div>
    </div>
  );
}
