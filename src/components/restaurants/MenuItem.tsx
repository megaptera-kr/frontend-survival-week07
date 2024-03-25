import Food from '../../types/Food';

type MenuItem = {
  food: Food;
  onClickItem: (food:Food) => void;
}

function MenuItem({ food, onClickItem }: MenuItem) {
  const { name, price } = food;

  return (
    <div>
      <button type="button" onClick={() => onClickItem(food)}>
        <span>
          {name}
          {' '}
          {price.toLocaleString()}
          원
        </span>
      </button>
    </div>
  );
}

export default MenuItem;
