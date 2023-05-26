import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>원하시는 주문을 터치해주세요</h2>
        <span>
          <button type="button">매장 주문</button>
          <button type="button">전체 포장</button>
        </span>
        <div>
          <div>
            <label htmlFor="ssearch">검색</label>
            <input id="ssearch" type="text" placeholder="식당 이름을 입력해주세요" />
            <div>
              <button type="button">전체</button>
              <button type="button">중식</button>
              <button type="button">한식</button>
              <button type="button">일식</button>
            </div>
          </div>

          <table>
            <tbody>
              <tr>
                <td>메가반점</td>
                <td>
                  <div>
                    <button type="button">짜장면 8,000원</button>
                  </div>
                  <div>
                    <button type="button">짬뽕 8,000원</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <div>
              <span>주문내역 0개</span>
            </div>
            <div>
              <span>총 결제 예상금액 0원</span>
            </div>
            <ul>
              <div>
                <span>김치 6,000원</span>
                <button type="button">X</button>
              </div>
            </ul>
            <div>
              <button type="button">취소</button>
              <button type="button">주문하기</button>
            </div>
          </div>
        </div>
        <div>
          <h2>주문이 완료되었습니다!</h2>
          <span>주문번호 12313132123132</span>
          <h2>주문목록</h2>
          <ul>
            <li>김치6,000원</li>
            <li>김치6,000원</li>
            <li>김치6,000원</li>
            <li>김치6,000원</li>
          </ul>
          <div>
            <span>총가격 24,000원</span>
          </div>
          <button type="button">메인화면으로 돌아가기</button>
        </div>
      </main>

    </div>
  );
}
