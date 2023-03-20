import Menu from './Menu';

import Restaurant from '../models/Restaurant';

type RestaurantProps = {
  restaurants: Restaurant[];
};

export default function Restaurants({ restaurants }: RestaurantProps) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                        식당 이름
                        </th>
                        <th>
                        종류
                        </th>
                        <th>
                        메뉴
                        </th>
                  </tr>
              </thead>
                <tbody>
                    {restaurants.map((restaurant) => (
                        <tr key={restaurant.id}>
                            <td>
                                {restaurant.name}
                          </td>
                            <td>
                                {restaurant.category}
                          </td>
                            <td>
                                <Menu menu={restaurant.menu} />
                          </td>
                      </tr>
                    ))}
              </tbody>
          </table>
      </div>
    );
}
