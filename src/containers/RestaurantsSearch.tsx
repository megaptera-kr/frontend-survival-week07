import { setFilterKeyword } from '../actions/uiActions';
import Input from '../components/Input';
import Select from '../components/Select';
import useDispatch from '../hooks/useDispatch';

function RestaurantsSearch() {
  const dispatch = useDispatch();
  return (
    <div className="search">
      <Input
        label="검색"
        placeholder="식당 이름"
        onChange={(name) => dispatch(setFilterKeyword({ name }))}
      />
      <Select
        options={[
          { label: '전체', value: '' },
          { label: '중식', value: '중식' },
          { label: '한식', value: '한식' },
          { label: '일식', value: '일식' },
        ]}
        onClick={(category) => dispatch(setFilterKeyword({ category }))}
      />
    </div>
  );
}

export default RestaurantsSearch;
