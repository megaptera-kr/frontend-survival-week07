import useFetchRestaurants from '../hooks/useFetchRestaurants';

import RestaurantTableRow from './RestaurantTableRow';

import RestaurantModel from '../models/RestaurantModel';

type RestaurantTableProps = {
  categoryName: string;
  restaurantName: string;
};

function RestaurantTable({
  categoryName,
  restaurantName,
}: RestaurantTableProps) {
  const { restaurants } = useFetchRestaurants({ categoryName, restaurantName });

  return (
    <div>
      <section>
        <table>
          <tbody>
            {restaurants.map((restaurant: RestaurantModel) => (
              <RestaurantTableRow
                key={restaurant.getId()}
                restaurant={restaurant}
              />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default RestaurantTable;
