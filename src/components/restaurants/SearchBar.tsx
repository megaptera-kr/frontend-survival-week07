import Categories from './Categories';
import TextFiled from './TextFiled';

export default function SearchBar() {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center m-auto">
      <TextFiled label="검색" />
      <Categories />
    </div>
  );
}
