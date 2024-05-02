function convertKRW(price:number) {
  return `${price.toLocaleString('ko-KR')}원`;
}

export default convertKRW;
