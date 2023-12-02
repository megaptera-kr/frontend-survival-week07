import { useEffect } from 'react';
import Input from '../components/Input';
import ResturantsList from './ResturantsList';

import Select from '../components/Select';
import useInput from '../hooks/useResturantFilter';
import Grid from '../components/Grid';
import useStore, { useSelector } from '../hooks/useStore';
import { fetchResturants } from '../reducers/domainReducer';
import filterList from '../utils/filterList';
import { RestaurantList } from '../../types';

export function Loading() {
  return <span>Loading...</span>;
}

function Restaurants() {
  const resturantsList = useSelector((state) => state.domain.resturantsList);
  const { dispatch } = useStore();

  const { value: name, handleChange: handleKeywordChange } = useInput('');
  const { value: category, handleChange: handleCategoryClick } = useInput('');

  useEffect(() => {
    dispatch(fetchResturants());
  }, []);

  const filtered = filterList<RestaurantList>(resturantsList, [{ category: 'name', keyword: name }, { category: 'category', keyword: category }]);

  return (
    <div data-testid="Restaurants" className="row">
      <Grid>
        <Input
          label="검색"
          value={name}
          placeholder="식당 이름"
          onChange={handleKeywordChange}
        />
        <Select
          options={[
            { label: '전체', value: '' },
            { label: '중식', value: '중식' },
            { label: '한식', value: '한식' },
            { label: '일식', value: '일식' },
          ]}
          onClick={handleCategoryClick}
        />
      </Grid>
      <section className="container row">
        <Grid gridTemplateColumns=".3fr .3fr 1fr">
          <li><strong>식당 이름</strong></li>
          <li><strong>종류</strong></li>
          <li><strong>메뉴</strong></li>
        </Grid>
        {filtered && <ResturantsList resturantsList={filtered} />}
      </section>
    </div>
  );
}

export default Restaurants;
