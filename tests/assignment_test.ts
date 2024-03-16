Feature('과제 테스트');

const addMenuToCart = ({ I }) => {
  I.amOnPage('/');

  I.click('전체 포장');
  I.click('중식');

  I.see('짜장면');
  I.see('탕수육');
  I.see('주문 메뉴가 없습니다');
  I.see('주문내역 0개');
  I.see('총 결제 예상금액 0원');

  I.click({ name: '#메가반점-짜장면' });
  I.wait(1);

  I.see('주문내역 1개');
  I.see('총 결제 예상금액 8,000원');
  I.see('짜장면');
  I.see('1개');
  I.see('8,000원');

  I.click({ name: '#메가반점-짜장면' });
  I.wait(1);
  I.see('짜장면');
  I.see('2개');
  I.see('총 결제 예상금액 16,000원');
};

Scenario('인트로 화면 표시', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');
  I.see('원하시는 주문을 터치해주세요');
  I.see('매장 주문');
  I.see('전체 포장');
});

Scenario('매장 주문 클릭 후 OrderPage 표시', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');
  I.see('원하시는 주문을 터치해주세요');

  I.click('매장 주문');
  I.see('[매장 주문] 주문입니다');
});

Scenario('전체 포장 클릭 후 OrderPage 표시', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');
  I.see('원하시는 주문을 터치해주세요');

  I.click('전체 포장');
  I.see('[전체 포장] 주문입니다');
});

Scenario('레스토랑 필터링', ({ I }) => {
  I.amOnPage('/');

  I.click('전체 포장');

  I.see('검색');
  I.see('전체');
  I.see('한식');
  I.see('중식');
  I.see('일식');

  I.click('한식');

  I.see('메리김밥');
  I.see('김밥');
  I.see('제육덮밥');

  I.dontSee('메가반점');
  I.dontSee('로드스시');

  // 초기화
  I.click('전체');

  // 검색 결과 없는 경우
  I.fillField('검색', 'a');
  I.see('검색 결과가 없습니다');

  // 검색 결과가 있는 경우
  I.fillField('검색', '로드');
  I.see('로드스시');
  I.see('모듬초밥');

  I.dontSee('메가반점');
  I.dontSee('김밥');
});

Scenario('메뉴를 카트에 추가하기', ({ I }) => {
  addMenuToCart({ I });
});

Scenario('메뉴를 카트에 추가 후, 선택한 메뉴 취소하기', ({ I }) => {
  addMenuToCart({ I });
  I.click('X');
  I.wait(1);
  I.see('주문 메뉴가 없습니다');
  I.see('주문내역 0개');
  I.see('총 결제 예상금액 0원');
});

Scenario('메뉴를 카트에 추가 후, 전체취소 하기', ({ I }) => {
  addMenuToCart({ I });

  I.click({ name: '#메가반점-짬뽕' });
  I.click({ name: '#메가반점-차돌짬뽕' });
  I.click({ name: '#메가반점-탕수육' });

  I.see('주문내역 5개');
  I.see('총 결제 예상금액 47,000원');
  I.wait(1);
  I.click('전체취소');
  I.see('주문 메뉴가 없습니다');
  I.see('주문내역 0개');
  I.see('총 결제 예상금액 0원');
});

Scenario(
  '메뉴를 카트에 추가 -> 뒤로가기 클릭 -> OrderPage 들어가기',
  ({ I }) => {
    addMenuToCart({ I });
    I.click('뒤로가기');
    I.see('메가테라 푸드코트 키오스크');
    I.see('원하시는 주문을 터치해주세요');
    I.see('매장 주문');
    I.see('전체 포장');

    I.click('매장 주문');
    I.see('주문 메뉴가 없습니다');
  },
);

Scenario('주문하기 ', ({ I }) => {
  addMenuToCart({ I });
  I.click('주문하기');
  I.wait(1);

  I.see('주문이 완료되었습니다!');
  I.see('주문번호');
  I.see('주문목록');
  I.see('짜장면');
  I.see('2개');
  I.see('총가격: 16,000원');
  I.see('메인화면으로 돌아가기');
});

Scenario('주문하기 -> 메인화면으로 돌아가기 ', ({ I }) => {
  addMenuToCart({ I });
  I.click('주문하기');
  I.wait(1);
  I.click('메인화면으로 돌아가기');

  I.see('메가테라 푸드코트 키오스크');
  I.see('원하시는 주문을 터치해주세요');
  I.see('매장 주문');
  I.see('전체 포장');
});
