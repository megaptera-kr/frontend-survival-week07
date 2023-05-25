import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import GoBackHomeButton from './GoBackHomeButton';

const context = describe;

describe('GoBackHomeButton', () => {
  const handleClickGoHome = jest.fn();

  function renderOrderButton(name: string) {
    render(
      <GoBackHomeButton
        name={name}
        handleClickGoHome={handleClickGoHome}
      />,
    );
  }

  context('name="메인화면으로 돌아가기"을 전달해주면', () => {
    it('"메인화면으로 돌아가기"버튼이 렌더링 된다.', () => {
      renderOrderButton('메인화면으로 돌아가기');

      expect(screen.getByRole('button', { name: '메인화면으로 돌아가기' })).toBeInTheDocument();
    });
  });

  context('사용자가 버튼을 클릭하면', () => {
    it('handleClickOrder가 호출된다.', async () => {
      renderOrderButton('메인화면으로 돌아가기');

      const button = screen.getByRole('button', { name: '메인화면으로 돌아가기' });

      fireEvent.click(button);

      await waitFor(() => {
        expect(handleClickGoHome).toBeCalled();
      });
    });
  });
});
