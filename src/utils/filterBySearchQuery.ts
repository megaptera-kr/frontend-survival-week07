export default function filterBySearchQuery<T extends { name: string }>(
  list: T[],
  query: string,
): T[] {
  return list.filter((item) => item.name.includes(query.trim()));
}
