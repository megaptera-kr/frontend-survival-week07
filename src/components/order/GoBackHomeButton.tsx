type Props = {
  handleClickGoHome: () => void;
  name: string;
}

export default function GoBackHomeButton({ handleClickGoHome, name }:Props) {
  return (
    <button
      className="w-1/5 h-20 py-4 bg-purple-400 rounded-lg font-semibold text-2xl hover:text-3xl"
      onClick={handleClickGoHome}
      type="button"
    >
      {name}
    </button>
  );
}
