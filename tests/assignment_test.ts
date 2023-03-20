Feature('과제 테스트');

Scenario('test', ({ I }) => {
    // HomePage
    I.amOnPage('/');

    I.see('어서오세요, 메가의 민족입니다');

    // RestaurantListPage
    I.click('식당 목록');

    I.see('메가반점');
    I.see('메리김밥');
    I.see('혹등고래카레');

    I.click('메가반점');

    // RestaurantDetailPage
    I.see('메가반점');
    I.click({ name: '#짜장면' });
    I.click({ name: '#짜장면' });

    I.click('식당 목록');

    // RestaurantListPage
    I.click('혹등고래카레');

    // RestaurantDetailPage
    I.see('혹등고래카레');
    I.click({ name: '#소시지카레' });

    I.click('장바구니');

    // CartPage
    I.see('점심 바구니');
    I.click('합계: 29,000원 주문');

    // OrderPage
    I.see('이대로 주문하시겠어요?');
    I.click('결제');

    // OrderCompletePage
    I.see('주문 완료, 서둘러 배달가겠습니다!');
});
