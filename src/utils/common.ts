export function normalize(value?: string): string {
  if (!value) return '';
  return value.trim().toLocaleLowerCase();
}

export function moneyformat(value: number): string {
  return new Intl.NumberFormat().format(value);
}

export function validatePathFormat(path: string): void {
  if (!path.startsWith('/')) {
    throw new Error('Invalid path format');
  }
}
