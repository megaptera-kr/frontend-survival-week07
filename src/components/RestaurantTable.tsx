import Menu from './Menu';

import type Restaurant from '../types/Restaurant';

type RestaurantTableType = {
  filteredData: Restaurant[]
}

export default function RestaurantTable({ filteredData }: RestaurantTableType) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((el) => (
          <tr key={`table-${el.name}`}>
            <td>{el.name}</td>
            <td>{el.category}</td>
            <td>
              <Menu menu={el.menu} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
