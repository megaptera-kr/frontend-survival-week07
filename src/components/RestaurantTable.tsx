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
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <section>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>레스토랑</th>
              <th>메뉴</th>
            </tr>
          </thead>

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
