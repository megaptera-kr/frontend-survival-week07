import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

function OrderPage() {
  // const { state } = useLocation();
  // const buttonTitle = state?.buttonTitle;

  return (
    <div>
      {/* 검색 인풋 */}
      <section>
        <label htmlFor='search'>검색</label>
        <input id='search' placeholder='식당 이름을 입력해주세요' />
      </section>
      {/* 카테고리별 검색 버튼 */}
      <section>
        <button type='button'>전체</button>
        <button type='button'>중식</button>
        <button type='button'>한식</button>
        <button type='button'>일식</button>
      </section>
      {/* 레스토랑 테이블 */}
      <hr />
      <section>
        <table>
          <tbody>
            <tr>
              <td>메가 반점</td>
              <td>짜장면 8,000원</td>
            </tr>
          </tbody>
        </table>
      </section>
      <hr />
      {/* 메뉴 선택 및 주문하기 */}
      <section>
        <p>주문내역 0개</p>
        <p>총 결제 예상금액 0원</p>
        <div>
          <span>짜장면</span>
          <span>8,000원</span>
          <button type='button'>X</button>
        </div>
        <div>
          <button type='button'>취소</button>
          <button type='button'>주문하기</button>
        </div>
      </section>
    </div>
  );
}

export default OrderPage;
