import useFetchRestaurants from '../hooks/useFetchRestaurants';
import useStore from '../hooks/useStore';

export default function filterRestaurants() {
  const restaurants = useFetchRestaurants();
  const store = useStore();

  const filteredRestaurants = restaurants.filter((restaurant) => (
    restaurant.category === store.state.Category || store.state.Category === '전체'
  )).filter((restaurant) => (
    (restaurant.name).includes((store.state.Text).trim())
  ));

  return (filteredRestaurants);
}
