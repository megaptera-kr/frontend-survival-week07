export default function CategorySearchFilter() {
  return (
    <div>
      <label htmlFor="ssearch">검색</label>
      <input id="ssearch" type="text" placeholder="식당 이름을 입력해주세요" />
      <div>
        <button type="button">전체</button>
        <button type="button">중식</button>
        <button type="button">한식</button>
        <button type="button">일식</button>
      </div>
    </div>
  );
}
