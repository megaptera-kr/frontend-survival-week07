import { screen, fireEvent, render } from '@testing-library/react';

import NavigationButton from './NavigationButton';

const context = describe;
const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => navigate,
}));

describe('NavigationButton', () => {
  function renderNavigationButton() {
    render((
      <NavigationButton path="/">
        navigate
      </NavigationButton>
    ));
  }

  it('NavigationButton을 렌더링 한다.', () => {
    renderNavigationButton();

    screen.getByText(/navigate/);
  });

  context('버튼을 클릭하면', () => {
    it('path값으로 navigate 함수를 호출한다.', () => {
      renderNavigationButton();

      fireEvent.click(screen.getByText(/navigate/));

      expect(navigate).toBeCalledWith('/');
    });
  });
});
