import MenuModel from '../models/MenuModel';

type MenuItemProps = {
  menuItem: MenuModel;
};

export default function MenuItem({ menuItem }: MenuItemProps) {
  const { id, name, nameAndPrice } = {
    id: menuItem.getId(),
    name: menuItem.getName(),
    nameAndPrice: menuItem.getNamePrice(),
  };

  return (
    <button type='button' name={`#${id}-${name}`}>
      {nameAndPrice}
    </button>
  );
}
