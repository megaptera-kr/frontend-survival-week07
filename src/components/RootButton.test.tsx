import { render, screen, fireEvent } from '@testing-library/react';

import { useNavigate } from 'react-router-dom';

import RootButton from './RootButton';
import { ORDER_TYPE_STORE, ORDER_TYPE_PACKAGE } from '../const/ConstOrder';

const context = describe;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('RootButton', () => {
  const path = '/order';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('render', () => {
    it('RootButton 이 보여진다.', () => {
      render(<RootButton orderKindType={ORDER_TYPE_STORE} path={path} />);

      screen.getByRole('button', { name: ORDER_TYPE_STORE });
    });

    it('RootButton 이 보여진다.', () => {
      render(<RootButton orderKindType={ORDER_TYPE_PACKAGE} path={path} />);

      screen.getByRole('button', { name: ORDER_TYPE_PACKAGE });
    });
  });

  context('button clicked', () => {
    it('클릭한 버튼의 path 값으로 useNavigate 가 호출된다.', () => {
      const mockNavigate = jest.fn();
      (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

      render(<RootButton orderKindType={ORDER_TYPE_STORE} path={path} />);

      const button = screen.getByRole('button', { name: ORDER_TYPE_STORE });
      fireEvent.click(button);

      expect(mockNavigate).toHaveBeenCalledWith(`${path}`, {
        state: { orderKindType: ORDER_TYPE_STORE },
      });
    });
  });
});
