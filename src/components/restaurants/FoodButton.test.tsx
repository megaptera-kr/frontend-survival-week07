import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import fixtures from '../../../fixtures';
import FoodButton from './FoodButton';

const context = describe;

describe('FoodButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const handleClick = jest.fn();
  function renderFoodButton() {
    render(<FoodButton food={fixtures.foods[0]} handleClick={handleClick} />);
  }
  context('fixtures.foods[0], handleClick props를 전달해주면', () => {
    it('"짜장면 8,000원" 버튼이 렌더링 된다.', () => {
      renderFoodButton();

      expect(screen.getByRole('button', { name: '짜장면 8,000원' })).toBeInTheDocument();
    });
  });
  context('사용자가 버튼을 클릭하면', () => {
    it('handleClick이 호출된다.', async () => {
      renderFoodButton();

      const button = screen.getByRole('button', { name: '짜장면 8,000원' });

      fireEvent.click(button);

      await waitFor(() => {
        expect(handleClick).toBeCalled();
      });
    });
  });
});
