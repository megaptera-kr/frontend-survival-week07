import { useEffect } from 'react';
import useStore, { useSelector } from './useStore';
import { getFilteredResturants } from '../reducers/selector';
import { fetchResturants } from '../actions/domainActions';

const useResturantsData = () => {
  const resturantsList = useSelector(getFilteredResturants);
  const { dispatch } = useStore();

  useEffect(() => {
    dispatch(fetchResturants());
  }, []);

  return resturantsList;
};

export default useResturantsData;
