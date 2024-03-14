import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';

import CartStore from '../stores/CartStore';

function useCartStore() {
  return useStore(container.resolve(CartStore));
}

export default useCartStore;
