import { container } from 'tsyringe';
import Store, { initialState } from './BaseStore';

describe('BaseStore', () => {
  const store = container.resolve(Store);

  beforeEach(() => {
    store.cleanup();
  });

  test('getState 메서드는 현재 state를 반환한다.', () => {
    expect(store.getState()).toEqual(initialState);
  });

  test('addListener 메서드는 함수를 파라미터로 받아, 리스너 목록에 저장한다.', () => {
    const cb = () => {};
    store.addListener(cb);

    expect(store.listeners.size).toBe(1);
  });

  test('removeListener 메서드는 함수를 파라미터로 받아, 리스너 목록에서 제거한다.', () => {
    const cb = () => {};
    store.addListener(cb);

    expect(store.listeners.size).toBe(1);

    store.removeListener(cb);

    expect(store.listeners.size).toBeFalsy();
  });

  test('publish 메서드는 등록된 리스너들을 호출한다.', () => {
    const cb1 = jest.fn();
    const cb2 = jest.fn();

    [cb1, cb2].forEach((cb) => store.addListener(cb));

    store.publish();

    store.listeners.forEach((listener) => expect(listener).toHaveBeenCalled());
  });

  test('dispatch 메서드는 액션을 받아, 리듀서에게 전달하고 변경 사항을 전파한다.', () => {
    const mock = jest.fn();
    store.addListener(mock);
    store.dispatch({ type: 'UPDATE_FETCH_STATUS', payload: 'SUCCESS' });
    expect(store.getState().ui.fetchStatus).toBe('SUCCESS');
    expect(mock).toHaveBeenCalled();
  });

  test('reducer 메서드는 객체 타입의 액션을 전달할 경우 새로운 상태를 반환한다.', () => {
    const newState = store.reducer(initialState, { type: 'UPDATE_FETCH_STATUS', payload: 'SUCCESS' });

    expect(newState.ui.fetchStatus).toBe('SUCCESS');
  });

  test('reducer 메서드는 함수 타입의 액션을 전달할 경우 액션을 호출한다.', () => {
    const mock = jest.fn().mockImplementation((dispatch: any, getState: any) => new Promise(() => {}));
    const newState = store.reducer(initialState, mock);

    expect(newState).toEqual(initialState);
    expect(mock).toHaveBeenCalledWith(store.dispatch, store.getState);
  });
});
