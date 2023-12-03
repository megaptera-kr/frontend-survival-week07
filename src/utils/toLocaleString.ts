export default (money: number, unit = '원') => `${money.toLocaleString('ko-kr')}${unit}`;
