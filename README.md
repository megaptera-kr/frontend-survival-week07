# 라우팅을 이용해서 페이지 분리하기

데브로드 프론트엔드 생존코스 7주차 과제

## 요구사항

[ ] routes 구성하기
  [ ] 인트로, 주문, 주문결과

- 인트로 페이지 -  `http://localhost/8080/`
  [ ] [매장 주문] 또는 [전체 포장] 버튼을 누르면 주문 페이지로 이동한다.
- 주문 페이지 -  `http://localhost/8080/order`
  [ ] 식당 목록과 메뉴를 보여준다.
  - Input에 식당 이름을 입력하
    [ ] 일치하는 식당 목록을 보여준다.
  - 카테고리를 선택하면
    [ ] 선택한 카테고리와 일치하는 식당 목록을 보여준다.
  - 식당 메뉴를 클릭하면
    [ ] 주문내역에 담은 음식의 개수와 총 결제 예상금액을 볼 수 있다.
    [ ] 주문내역에 음식은 중복해서 담을 수 있다.
    [ ] 취소 버튼을 클릭하면 인트로 페이지로 이동한다.
    - 사용자는 주문하기 버튼을 클릭하면
      [ ] 주문 API를 호출한다.
      [ ] 응답으로 받은 주문Id를 쿼리스트링으로 전달하여 주문결과 페이지로 이동한다.
- 주문결과 페이지 -  [`http://localhost:8080/order/complete?orderId={orderId}`](http://localhost:8080/order/complete?orderId={orderId})
  [ ] 주문Id를 받아서 주문내역 API를 호출한다.
  [ ] API 응답으로 받은 주문번호, 주문목록, 총 가격을 볼 수 있다.
  [ ] `메인화면으로 돌아가기` 버튼을 누르면 인트로 페이지로 이동 한다.

## 서버 실행하기

```shell
cd express-app

npm install

npx nodemon app.ts
```

## 프론트 실행하기

```shell
npm install

npm start
```

## Unit 테스트

```shell
npm test
```

## E2E 테스트

```shell
npm run codeceptjs
```
