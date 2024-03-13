export function normalize(value?: string): string {
  if (!value) return '';
  return value.trim().toLocaleLowerCase();
}

export function moneyformat(value: number) {
  return new Intl.NumberFormat().format(value);
}
