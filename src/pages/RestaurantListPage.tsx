import { Link } from 'react-router-dom';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import Restaurant from '../models/Restaurant';
import Restaurants from '../components/Restaurants';

function RestaurantListPage() {
    const restaurants = useFetchRestaurants();
    console.log(restaurants);
    return (
        <ul>
            <h1>식당 목록</h1>
            {

                restaurants.map((restaurant) => (
                    <li key={restaurant.id}>
                        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
                    </li>
                ))
            } </ul>
    );
}

export default RestaurantListPage;