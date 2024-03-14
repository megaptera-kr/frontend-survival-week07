import { fireEvent, render, screen } from '@testing-library/react';

import MenuItem from './MenuItem';
import foods from '../../fixtures/foods';

describe('MenuItem', () => {
  const food = foods[0];
  const handleClickItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render food information', () => {
    render(<MenuItem menu={food} onClickItem={handleClickItem} />);

    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
  });

  it('listens for restaurant click event', () => {
    render(<MenuItem menu={food} onClickItem={handleClickItem} />);

    fireEvent.click(screen.getByText(/짜장면/));
    expect(handleClickItem).toBeCalledWith(food);
  });
});
