import { render, screen, fireEvent } from '@testing-library/react';

import { useNavigate } from 'react-router-dom';

import RootButton from './RootButton';

const context = describe;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('RootButton', () => {
  const buttonTitle = '포장';
  const path = '/order';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('render', () => {
    it('RootButton 이 보여진다.', () => {
      render(<RootButton buttonTitle={buttonTitle} path={path} />);

      screen.getByRole('button', { name: buttonTitle });
    });
  });

  context('button clicked', () => {
    it('클릭한 버튼의 path 값으로 useNavigate 가 호출된다.', () => {
      const mockNavigate = jest.fn();
      (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

      render(<RootButton buttonTitle={buttonTitle} path={path} />);

      const button = screen.getByRole('button', { name: buttonTitle });
      fireEvent.click(button);

      expect(mockNavigate).toHaveBeenCalledWith(`${path}`, {
        state: { buttonTitle },
      });
    });
  });
});
