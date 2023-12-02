import {
  act, render, renderHook, screen,
} from '@testing-library/react';
import Receipt from './Receipt';
import fixtures from '../../fixtures';
import useStore from '../hooks/useStore';
import { setReceipt } from '../reducers/uiReducer';

describe('Receipt', () => {
  test('전역 스토어에 영수증 데이터가 있으면, 화면에 영수증을 그린다.', () => {
    render(<Receipt />);
    const { result: { current } } = renderHook(() => useStore());

    act(() => current.dispatch(setReceipt(fixtures.receipt)));

    const element = screen.getByText(fixtures.receipt.id);

    expect(element).toBeInTheDocument();
  });
});
