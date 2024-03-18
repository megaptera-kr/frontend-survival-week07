import MenuItem from '../../../components/MenuItem';

import Menu from '../../../types/Menu';

type OrderListProps = {
  menus: Menu[];
};

export default function OrderList({ menus }: OrderListProps) {
  return (
    <ul>
      {menus?.map((menu) => (
        <MenuItem key={menu.id} menu={menu}>
          <span style={{ margin: '0 auto' }}>
            {menu?.name}
            (
            {menu?.price.toLocaleString()}
            원)
          </span>
        </MenuItem>
      ))}
    </ul>
  );
}
