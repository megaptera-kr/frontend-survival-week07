import { ChangeEvent } from 'react';

import useSearchStore from './useSearchStore';

export default function useSearchQuery() {
  const [{ query }, store] = useSearchStore();

  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    store.setQuery(value);
  };

  return {
    query,
    handleSearchQuery,
  };
}
