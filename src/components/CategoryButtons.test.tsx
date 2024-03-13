import { render, screen, fireEvent } from '@testing-library/react';

import CategoryButtons from './CategoryButtons';

import useFetchCategories from '../hooks/useFetchCategories';

jest.mock('../hooks/useFetchCategories');

describe('CategoryButtons', () => {
  const mockSetCategoryButtonName = jest.fn();

  beforeEach(() => {
    mockSetCategoryButtonName.mockClear();
  });

  it('rendering correctly', () => {
    render(
      <CategoryButtons setCategoryButtonName={mockSetCategoryButtonName} />,
    );
    screen.getByRole('button', { name: '전체' });
    screen.getByRole('button', { name: '한식' });
    screen.getByRole('button', { name: '일식' });
    screen.getByRole('button', { name: '중식' });
  });

  it('button clicked', () => {
    render(
      <CategoryButtons setCategoryButtonName={mockSetCategoryButtonName} />,
    );

    const button전체 = screen.getByRole('button', { name: '전체' });
    fireEvent.click(button전체);
    expect(mockSetCategoryButtonName).toHaveBeenCalledWith('전체');
  });

  it('rendering correctly with only 전체', () => {
    (useFetchCategories as jest.Mock).mockReturnValueOnce({ categories: [] });

    render(
      <CategoryButtons setCategoryButtonName={mockSetCategoryButtonName} />,
    );

    expect(screen.queryByRole('button', { name: '전체' })).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: '한식' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: '일식' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: '중식' }),
    ).not.toBeInTheDocument();
  });
});
