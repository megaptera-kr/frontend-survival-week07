import { useParams } from 'react-router-dom';
import Restaurants from '../components/Restaurants';

import useFetchRestaurant from '../hooks/useFetchRestaurant';

export default function RestaurantDetailPage() {
    const { id } = useParams();
    const restaurant = useFetchRestaurant(id);
    const restaurants = restaurant ? [restaurant] : [];
    return (
        <div>
            <Restaurants restaurants={restaurants} />
        </div>
    );
}
