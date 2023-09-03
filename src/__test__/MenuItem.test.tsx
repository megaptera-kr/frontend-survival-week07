import { fireEvent, render, screen } from '@testing-library/react';

import MenuItem from '../components/MenuItem';

import fixtures from '../../fixtures';

describe('<MenuItem />', () => {
  const { foods } = fixtures;

  const food = foods[0];

  const handleClickFoodBtn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render menu item', () => {
    render(<MenuItem food={food} onClickFoodBtn={handleClickFoodBtn} />);
    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
  });

  it('Call the food button Click handler', () => {
    render(<MenuItem food={food} onClickFoodBtn={handleClickFoodBtn} />);
    fireEvent.click(screen.getByText('짜장면: 8,000원'));
    expect(handleClickFoodBtn).toBeCalledWith(food);
  });
});
