import useMenuStore from '../hooks/useMenuStore';
import Food from '../types/Food';

export default function Menu({ menu }: { menu: Food[] }) {
  const [, store] = useMenuStore();

  if (!menu.length) {
    return (
      <p>메뉴가 존재하지 않습니다</p>
    );
  }

  const handleClickSelect = (food: Food) => {
    store.addMenu(food);
  };

  return (
    <ul>
      {menu.map((food: Food, index: number) => {
        const key = `${food.id}-${index}`;

        return (
          <li
            style={{
              display: 'flex',
              paddingBlock: '.5rem',
              cursor: 'pointer',
            }}
            key={key}
          >
            <button type="button" style={{ margin: '0 auto', border: 'none', background: 'none' }} onClick={() => handleClickSelect(food)}>
              {`${food.name} ${food.price.toLocaleString()}원`}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
