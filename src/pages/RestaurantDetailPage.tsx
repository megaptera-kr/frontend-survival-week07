import { useLocation, useParams } from 'react-router-dom';
import Restaurants from '../components/Restaurants';
import useFetchRestaurant from '../hooks/useFetchRestaurant';
import Restaurant from '../models/Restaurant';
import RestaurantDetail from '../components/RestaurantDetail';


function RestaurantDetailPage() {
    const { restaurantId } = useParams();
    const restaurant = useFetchRestaurant(restaurantId);
    console.log(restaurant);
    return (
        <main>
            {restaurant ? (
                <RestaurantDetail restaurant={restaurant} />
            ) : (
                <p>No Restaurant info</p>
            )

            }
        </main>
    );
}

export default RestaurantDetailPage;

