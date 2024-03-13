import MenuModel from '../models/MenuModel';

type MenuItemProps = {
  menuItem: MenuModel;
};

function MenuItem({ menuItem }: MenuItemProps) {
  const { id, name, nameAndPrice } = {
    id: menuItem.getId(),
    name: menuItem.getName(),
    nameAndPrice: menuItem.getNamePrice(),
  };

  const handleClick = () => {
    // TODO:
  };

  return (
    <button type='button' name={`#${id}-${name}`} onClick={handleClick}>
      {nameAndPrice}
    </button>
  );
}

export default MenuItem;
