import { Menu } from '../types/restaurants';
import priceToLocal from '../utils/priceToLocal';

type OrderMenuProps = {
  menu: Menu[]
}

export default function OrderMenu({ menu }: OrderMenuProps) {
  const totalPrice = menu.reduce((prev, cur) => prev + cur.price, 0);
  return (
    <div>
      <h2>주문목록</h2>
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.id}>
            <span>{menuItem.name}</span>
            <span>
              {priceToLocal(menuItem.price)}
              원
            </span>
          </li>
        ))}
      </ul>
      <div>
        총가격
        {' '}
        {priceToLocal(totalPrice)}
        원
      </div>
    </div>
  );
}
