import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { container } from 'tsyringe';
import TextFiled from './TextFiled';

const context = describe;

describe('TextFiled', () => {
  beforeEach(() => {
    container.clearInstances();
  });
  function renderTextFiled() {
    render(<TextFiled label="검색" />);
  }
  context('label="검색"을 전달하면', () => {
    it('검색 텍스트와 인풋이 랜더링 된다.', () => {
      renderTextFiled();

      expect(screen.getByText('검색')).toBeInTheDocument();
      expect(screen.getByLabelText('검색')).toBeInTheDocument();
    });
  });

  context('사용자가 "메가"를 입력하면', () => {
    it('input value가 "메가"가 된다. ', async () => {
      renderTextFiled();
      const input = screen.getByLabelText('검색');

      fireEvent.change(input, { target: { value: '메가' } });

      await waitFor(() => {
        expect(screen.getByDisplayValue('메가')).toBeInTheDocument();
      });
    });
  });
});
