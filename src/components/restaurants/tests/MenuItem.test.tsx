import { fireEvent, render, screen } from '@testing-library/react';

import MenuItem from '../MenuItem';
import fixtures from '../../../../fixtures';

describe('MenuItem', () => {
  const { food } = fixtures;

  const onClickItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderMenuItem() {
    render((
      <MenuItem
        food={food}
        onClickItem={onClickItem}
      />
    ));
  }

  it('renders food information', () => {
    renderMenuItem();

    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
  });

  it('listens for restaurant click event', () => {
    renderMenuItem();

    fireEvent.click(screen.getByText(/짜장면/));

    expect(onClickItem).toBeCalledWith(food);
  });
});
