import priceToLocal from '../utils/priceToLocal';

type RestaurantsMenuButton = {
  name: string;
  price: number;
  onClick: () => void;
}

export default function RestaurantsMenuButton({
  name,
  price,
  onClick,
}: RestaurantsMenuButton) {
  return (
    <button type="button" onClick={onClick}>
      <span>
        {name}
        {' '}
      </span>
      <span>{`${priceToLocal(price)}원`}</span>
    </button>
  );
}
