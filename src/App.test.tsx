import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

const context = describe;

describe('화면에 매장 주문 버튼이 보인다.', () => {
  function renderApp(path : string) {
    render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }
  context('매장 주문을 실행시, 주문 페이지로 이동된다.', () => {
    it('페이지가 이동된다.', () => {
      renderApp('/order');
    });
  });

  context('주문 실행 후, 주문 완료 페이지로 이동된다.', () => {
    it('페이지가 이동된다.', () => {
      renderApp('/complete');
    });
  });
});
