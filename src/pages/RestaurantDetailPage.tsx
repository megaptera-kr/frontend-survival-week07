import { useLocation } from 'react-router-dom';
import Menu from '../components/Menu';
import Restaurant from '../models/Restaurant';

function RestaurantDetailPage() {
  const location = useLocation();
  const restaurant:Restaurant = location.state;
  const { name, category, menu } = restaurant;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '100px', textAlign: 'center' }}>식당이름</th>
            <th style={{ width: '100px', textAlign: 'center' }}>종류</th>
            <th style={{ width: '250px', textAlign: 'center' }}>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {
            menu.map((m, i:number) => (
              i === 0
                && (
                  <tr key={m.id}>
                    <td rowSpan={4} style={{ textAlign: 'center' }}>
                      {name}
                    </td>
                    <td rowSpan={4} style={{ textAlign: 'center' }}>
                      {category}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <Menu menu={menu} />
                    </td>
                  </tr>
                )
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantDetailPage;
