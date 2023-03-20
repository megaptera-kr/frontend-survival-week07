import data from '../data';

export default function useFetchRestaurant(id?: string) {
    if (!id) {
        return null;
    }

    return data.restaurants.find((i) => i.id === parseInt(id, 10));
}
