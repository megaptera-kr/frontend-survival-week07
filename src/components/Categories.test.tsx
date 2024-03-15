/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';
import Categories from './Categories';

describe('Categories', () => {
  const catagories = ['한식', '일식', '중식'];
  const setFilterCategory = jest.fn();

  it('renders button', () => {
    render(
      <Categories
        catagories={catagories}
        setFilterCategory={setFilterCategory}
      />
    );

    screen.getByText('한식');
    screen.getByText('일식');
    screen.getByText('중식');
  });
});
