Feature('과제 테스트');

Scenario('인트로 화면', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드키트 키오스크');
  I.see('원하시는 주문을 터치해주세요');

  I.click('매장주문');
});

// Scenario('음식 주문하기', ({ I }) => {
//   I.amOnPage('/order');

//   I.waitForText('메가반점');
//   I.see('메리김밥');

//   I.click({ name: '#짜장면' });
//   I.click({ name: '#김밥' });
//   I.see('주문 내역');
//   I.see('총 결제 예상금액');

//   I.waitForText('2개');
//   I.waitForText('11,500원');

//   I.click('주문하기');
// });

// Scenario('식당 찾기', ({ I }) => {
//   I.amOnPage('/order/complete');

//   I.see('주문이 완료되었습니다!');
//   I.see('메인화면으로 돌아가기');
// });
