import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import MenuStore from '../store/MenuStore';

export default function useMenuStore() {
  const menuStore = container.resolve(MenuStore);

  return useStore(menuStore);
}
