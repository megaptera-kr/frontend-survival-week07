import { useMemo } from 'react';

import { useDebounce } from 'usehooks-ts';

import filterBySearchQuery from '../utils/filterBySearchQuery';

import select from '../utils/select';

import Restaurant from '../types/Restaurant';

import useSearchStore from './useSearchStore';

export default function useFilteredMenu(data: Restaurant[]) {
  const [state] = useSearchStore();

  const { query, category } = state;

  const debouncedQuery = useDebounce<string>(query, 200);

  const restaurants = useMemo(() => {
    let result = [...data];

    if (category === '전체') {
      result = filterBySearchQuery(result, debouncedQuery);
    } else {
      result = filterBySearchQuery(
        select(result, 'category', category),
        debouncedQuery,
      );
    }

    return result;
  }, [data, category, debouncedQuery]);

  return restaurants;
}
