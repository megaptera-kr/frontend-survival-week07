import { fireEvent, render, screen } from '@testing-library/react';
import CategoryButtons from './CategoryButtons';
import fixtures from '../../fixtures';
import extractCategories from '../utils/extractCategories';

const context = describe;
describe('CategoryButtons', () => {
  const { restaurants } = fixtures;
  const categories = extractCategories(restaurants);

  const setCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderCategoryButtons = () => {
    render(<CategoryButtons categories={categories} setCategory={setCategory} />);
  };

  it('render elements', () => {
    renderCategoryButtons();
    screen.getByText('전체');
    screen.getByText('중식');
    screen.getByText('한식');
    screen.getByText('일식');
  });

  context('when user click category button', () => {
    it('calls setCategory handler', () => {
      renderCategoryButtons();

      fireEvent.click(screen.getByText('전체'));

      expect(setCategory).toBeCalledWith('전체');
    });
  });
});
