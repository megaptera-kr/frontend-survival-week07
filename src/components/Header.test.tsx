import { screen, render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders Header', () => {
    render(<Header />);
    screen.getByText('메가테라 푸드코트 키오스크');
  });
});
