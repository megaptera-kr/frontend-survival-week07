import MenuModel from '../models/MenuModel';

type MenuItemProps = {
  menuItem: MenuModel;
};

export default function MenuItem({ menuItem }: MenuItemProps) {
  return (
    <button type='button' key={menuItem.getId()}>
      {menuItem.getNamePrice()}
    </button>
  );
}
