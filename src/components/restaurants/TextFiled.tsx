import useRestaurantStore from '../../hooks/useRestaurantStore';

type Props = {
  label: string;
}
export default function TextFiled({ label }: Props) {
  const [{ filteredText }, store] = useRestaurantStore();
  return (
    <div className="w-full">
      <label
        className="font-bold text-2xl mr-4"
        htmlFor="search-input"
      >
        {label}
      </label>
      <input
        className="w-[calc(100%-60px)] px-2 py-1 text-2xl border-2 border-purple-400 rounded-md
        focus:outline-none focus:border-purple-600"
        type="text"
        id="search-input"
        value={filteredText}
        onChange={
          (e:React.ChangeEvent<HTMLInputElement>) => (
            store.search(e.target.value)
          )
        }
      />
    </div>
  );
}
