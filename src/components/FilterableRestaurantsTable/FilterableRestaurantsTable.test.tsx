import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { rest } from 'msw';
import FilterableRestaurantsTable from '.';
import BASE_URL from '../../api';
import fixture from '../../fixture';
import server from '../../mocks/server';

const { restaurants } = fixture;

const context = describe;
function renderFilterableRestaurantsTable() {
  render(<FilterableRestaurantsTable />);
}
describe('FilterableRestaurantsTable 컴포넌트', () => {
  beforeEach(() => {
    renderFilterableRestaurantsTable();
  });

  context('데이터 응답이 실패하면', () => {
    beforeEach(() => {
      server.use(
        rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => res(ctx.status(500))),
      );
    });
    it('식당을 불러오지 못했습니다.를 렌더링한다.', async () => {
      const errorMsg = await screen.findByText('식당을 불러오지 못했습니다.');
      expect(errorMsg).toBeInTheDocument();
    });
  });

  context('데이터 응답에 성공하여 올바르게 렌더링 된다면', () => {
    it('식당 리스트를 렌더링한다.', async () => {
      const restaurantRows = await screen.findAllByRole('row');
      expect(restaurantRows).toHaveLength(restaurants.length);
    });
  });

  context('검색어에 "메"라고 입력하면', () => {
    beforeEach(() => {
      fireEvent.change(screen.getByLabelText('검색'), {
        target: { value: '메' },
      });
    });

    it('식당 이름에 "메"를 포함하는 식당이름만 렌더링된다.', async () => {
      await waitFor(() => {
        expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
        expect(screen.getByText(/메가반점/)).toBeInTheDocument();
        expect(screen.queryByText(/데브부엌/)).not.toBeInTheDocument();
      });
    });
  });

  context('한식 카테고리를 선택하면', () => {
    it('카테고리가 한식인 식당만 렌더링된다.', async () => {
      await waitFor(() => {
        fireEvent.click(screen.getByText('한식'));

        expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
        expect(screen.getByText(/데브부엌/)).toBeInTheDocument();
        expect(screen.queryByText(/메가반점/)).not.toBeInTheDocument();
      });
    });
  });

  context('검색어가 "메"라고 입력하고 한식 카테고리를 선택하면', () => {
    beforeEach(() => {
      fireEvent.change(screen.getByLabelText('검색'), {
        target: { value: '메' },
      });
    });

    it('카테고리가 한식이고 식당이름에 "메"를 포함하는 식당만 렌더링한다.', async () => {
      await waitFor(() => {
        fireEvent.click(screen.getByText('한식'));
        expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
        expect(screen.queryByText(/메가반점/)).not.toBeInTheDocument();
        expect(screen.queryByText(/데브부엌/)).not.toBeInTheDocument();
      });
    });
  });
});
