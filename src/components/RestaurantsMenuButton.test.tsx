import { screen, render, fireEvent } from '@testing-library/react';

import RestaurantsMenuButton from './RestaurantsMenuButton';

const context = describe;

describe('RestaurantsMenuButton', () => {
  const handleClick = jest.fn();

  function renderButton() {
    render((
      <RestaurantsMenuButton
        name="메뉴 이름"
        price={100_000}
        onClick={handleClick}
      />
    ));
  }

  it('name을 출력한다', () => {
    renderButton();
  });

  context('button을 클릭하면', () => {
    it('onClick 함수가 실행된다', () => {
      renderButton();

      fireEvent.click(screen.getByText(/메뉴 이름/));
      expect(handleClick).toBeCalled();
    });
  });
});
