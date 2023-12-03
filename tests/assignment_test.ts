Feature('과제 테스트');

Scenario('인트로 화면', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');
  I.see('원하시는 주문을 터치해주세요');

  I.click('매장 주문');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('메가반점');
  I.see('메리김밥');

  I.click('짜장면');
  I.click('김밥');

  I.see('주문내역');
  I.see('총 결제 예상금액');

  I.waitForText('2개');
  I.waitForText('11,500원');

  I.click('주문하기');

  I.waitForText('주문이 완료되었습니다!');
  I.see('주문목록');
  I.see('김밥');
  I.see('짜장면');
});

Scenario('식당 찾기', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('메가반점');

  I.click('한식');

  I.see('메리김밥');
  I.see('데브부엌');
  I.dontSee('메가반점');

  I.fillField('검색', '데브부엌');
  I.see('제육덮밥');
  I.dontSee('메리김밥');
  I.dontSee('컵라면');
});

Scenario('장바구니에서 주문 취소하기', ({ I }) => {
  I.amOnPage('/order');

  I.click('짜장면', { 'data-testid': 'PickFoodBtn짜장면--add' });
  I.click('김밥', { 'data-testid': 'PickFoodBtn김밥--add' });

  I.waitForText('2개');
  I.waitForText('11,500원');

  I.click('김밥', { 'data-testid': 'PickFoodBtn김밥--delete' });

  I.waitForText('1개');
  I.waitForText('8,000원');
});

Scenario('구매 정보 없이 구매 내역 접근하기', ({ I }) => {
  I.amOnPage('/order/complate');

  I.dontSee('주문이 완료되었습니다!');

  I.waitForText('메가반점');
});

Scenario('주문 페이지에서 취소 버튼 눌러, 메인 페이지로 넘어오기', ({ I }) => {
  I.amOnPage('/order');

  I.see('메가반점');

  I.click('취소', { 'data-testid': 'Cancel' });

  I.dontSee('메가반점');

  I.waitForText('원하시는 주문을 터치해주세요');
});

Scenario('처음부터 주문 접수까지 완료하기', ({ I }) => {
  I.amOnPage('/');

  I.waitForText('원하시는 주문을 터치해주세요');

  I.click('매장 주문');

  I.click('짜장면', { 'data-testid': 'PickFoodBtn짜장면--add' });
  I.click('김밥', { 'data-testid': 'PickFoodBtn김밥--add' });

  I.waitForText('2개');
  I.waitForText('11,500원');

  I.click('주문하기', { 'data-testid': 'Payment' });

  I.dontSee('메가반점');

  I.see('주문이 완료되었습니다!');

  I.see('주문번호');
  I.see('짜장면(8,000원)');
  I.see('김밥(3,500원)');
  I.see('메인화면으로 돌아가기');
});
