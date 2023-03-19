import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import Restaurants from '../components/Restaurants';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function ShopDetailPage() {
  const restaurants = useFetchRestaurants();
  const { id } = useParams();

  const filteredRestaurants = useMemo(() => restaurants
    .filter((restaurant) => restaurant.id === Number(id)), [restaurants]);

  return (
    <>
      <h2>연진아 뭐먹을래 !~@?  ^^&*</h2>

      <Restaurants restaurants={filteredRestaurants} />
    </>
  );
}
