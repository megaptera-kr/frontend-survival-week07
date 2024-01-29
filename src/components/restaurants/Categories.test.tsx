import { render, screen } from '@testing-library/react';
import Categories from './Categories';

describe('Categories', () => {
  const setCategory = jest.fn();
  const categories = ['딸기', '포도', '수박'];
  it('모든 카테고리는 전체를 포함한다.', () => {
    render(<Categories setCategory={setCategory} categories={categories} />);
    expect(screen.getByText(/전체/)).toBeInTheDocument();
  });
});
