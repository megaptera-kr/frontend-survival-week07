import MenuModel from '../models/MenuModel';
import MenuItem from './MenuItem';

type MenuProps = {
  menu: MenuModel[];
};

export default function Menu({ menu }: MenuProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0.2rem 0.2rem',
      }}
    >
      {menu.map((item: MenuModel) => (
        <MenuItem key={item.getId()} menuItem={item} />
      ))}
    </div>
  );
}
