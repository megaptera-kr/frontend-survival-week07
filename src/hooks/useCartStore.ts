import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import CartStore from '../stores/Cart.store';

export default function useCartStore() {
  const cartStore = container.resolve(CartStore);
  return useStore(cartStore);
}
