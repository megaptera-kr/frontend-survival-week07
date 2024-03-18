import Food from '../types/Food';

type MenuItemProps = {
  menu: Food;
  onClickItem: (menu: Food) => void;
};

export default function MenuItem({ menu, onClickItem }: MenuItemProps) {
  const { name, price } = menu;

  return (
    <li>
      <button type="button" onClick={() => onClickItem(menu)}>
        <span>{name}</span>
        <span>{`(${price.toLocaleString()}원)`}</span>
      </button>
    </li>
  );
}
