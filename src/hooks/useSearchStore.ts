import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import SearchStore from '../stores/SearchStore';

export default function useSearchStore() {
  const searchStore = container.resolve(SearchStore);

  return useStore(searchStore);
}
