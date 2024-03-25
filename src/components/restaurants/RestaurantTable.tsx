import Restaurant from '../../types/Restaurant';

import RestaurantRow from './RestaurantRow';

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  // 정말 데이터가 없는 것과 서버에서 데이터를 불러오지 못한것을 어떻게 구분하지
  if (!restaurants.length) {
    return (<p>loading...</p>);
  }

  return (
    <table>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantRow
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </table>
  );
}
