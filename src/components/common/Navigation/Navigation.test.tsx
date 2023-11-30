import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavigationInterface } from './Navigation.interface';
import Navigation from './Navigation';

const context = describe;

describe('Navigation컴포넌트에 있는 목록을 확인한다.', () => {
  context('Home과 Order링크를 정의하였다.', () => {
    render(<Navigation />);
    it('Home이 있다', () => {
      expect(screen.findAllByText('Home')).toBeTruthy();
    });
    it('Order가 있다', () => {
      expect(screen.findAllByText('Order')).toBeTruthy();
    });
  });
});
