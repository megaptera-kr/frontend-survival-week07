import { useStore } from 'usestore-ts';
import { container } from 'tsyringe';
import CartStore from '../store/cartStore';

export default function useCartStore() {
  const store = container.resolve(CartStore);

  return useStore(store);
}
