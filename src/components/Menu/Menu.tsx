import { MenuInterface } from '../Restaurants/Restaurants.interface';
import useCartStore from '../../hooks/useCartStore';

interface MenuProps {
  menues : MenuInterface[]
}

function Menu({ menues } : MenuProps) {
  const [{ cart }, store] = useCartStore();
  const handleAddCart = (menu : MenuInterface) => {
    store.addCart(menu);
  };
  return (
    <ul className="menues">
      {menues.map((menu) => (
        <li key={menu.id}>
          <button type="button" data-testid={`${menu.name}`} onClick={() => { handleAddCart(menu); }}>
            <span>{menu.name}</span>
            <span>
              {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              {' '}
              원
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
