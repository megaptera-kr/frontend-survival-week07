type Props = {
  handleClickOrder: () => void;
  name: string;
}

export default function RestaurantOrderButton({ handleClickOrder, name }:Props) {
  return (
    <button
      className="w-1/5 h-40 bg-purple-400 rounded-lg font-semibold text-2xl hover:text-3xl"
      onClick={handleClickOrder}
      type="button"
    >
      {name}
    </button>
  );
}
