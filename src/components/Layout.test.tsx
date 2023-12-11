import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('layout', () => {
  it('render elements', () => {
    render(<Layout />);
    screen.getByText('메가테라 푸드키트 키오스크');
  });
});
