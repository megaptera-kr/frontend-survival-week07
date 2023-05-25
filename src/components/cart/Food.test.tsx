import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import fixtures from '../../../fixtures';
import Food from './Food';

const context = describe;

describe('Food', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const handleClick = jest.fn();
  function renderFood() {
    render(
      <Food
        index={0}
        food={fixtures.foods[0]}
        handleClick={handleClick}
      />,
    );
  }
  context('fixtures.foods[0], handleClick props를 전달해주면', () => {
    it('"짜장면 8,000원" 텍스트와 X버튼이 렌더링 된다.', () => {
      renderFood();

      expect(screen.getByText('짜장면 8,000원')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'X' })).toBeInTheDocument();
    });
  });
  context('사용자가 X버튼을 클릭하면', () => {
    it('handleClick이 호출된다.', async () => {
      renderFood();

      const button = screen.getByRole('button', { name: 'X' });

      fireEvent.click(button);

      await waitFor(() => {
        expect(handleClick).toBeCalled();
      });
    });
  });
});
