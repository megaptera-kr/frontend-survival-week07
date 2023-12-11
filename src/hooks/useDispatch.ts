import { container } from 'tsyringe';
import Store from '../store/BaseStore';

export default function useDispatch() {
  const store = container.resolve(Store);
  return store.dispatch;
}
