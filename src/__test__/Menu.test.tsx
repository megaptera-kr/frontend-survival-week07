import { render, screen } from '@testing-library/react';
import Menu from '../components/Menu';
import fixtures from '../../fixtures';

describe('<Menu />', () => {
  const { foods } = fixtures;

  it('render menu list', () => {
    render(<Menu menu={foods} />);
    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
