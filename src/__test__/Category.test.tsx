import { fireEvent, render, screen } from '@testing-library/react';
import Category from '../components/Category';

describe('<Category />', () => {
  const category = '중식';
  const onClickCategoryBtn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render category button text', () => {
    render(<Category category={category} onClickCategoryBtn={onClickCategoryBtn} />);
    screen.getByText(category);
  });

  it('call the click handler', () => {
    render(<Category category={category} onClickCategoryBtn={onClickCategoryBtn} />);
    fireEvent.click(screen.getByText(category));
    expect(onClickCategoryBtn).toBeCalledWith(category);
  });
});
