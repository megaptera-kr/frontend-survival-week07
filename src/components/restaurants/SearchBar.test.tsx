import { screen, fireEvent } from '@testing-library/react';

import { useRender } from '../../testHelper';

import SearchBar from './SearchBar';

const context = describe;

const handleSearchQuery = jest.fn();

jest.mock('../../hooks/useSearchQuery', () => () => ({
  handleSearchQuery,
}));

describe('서치바 컴포넌트', () => {
  context('렌더링', () => {
    it('라벨과 인풋이 보여야한다.', () => {
      useRender(
        <SearchBar
          htmlFor='input-검색'
          placeholder='식당 이름을 입력해 주세요.'
        />,
      );

      expect(screen.getByLabelText(/input-검색/)).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText(/식당 이름을 입력해 주세요./),
      ).toBeInTheDocument();
    });
  });

  context('handleSearchQuery 함수호출 테스트', () => {
    beforeEach(() => {
      handleSearchQuery.mockClear();
    });

    it('인풋에 "메" 이벤트가 발생했을때 메가 보여야함.', () => {
      useRender(
        <SearchBar
          htmlFor='input-검색'
          placeholder='식당 이름을 입력해 주세요.'
        />,
      );

      const input = screen.getByPlaceholderText(
        /식당 이름을 입력해 주세요./,
      ) as HTMLInputElement;

      fireEvent.change(input, { target: { value: '메가김밥' } });

      expect(input).toHaveValue('메가김밥');
    });
  });
});
