export default async function useFetchReceipt(id: string) {
  const data = await fetch(`http://localhost:3000/orders/${id}`)
    .then((res: Response) => res.json());
  if (!data.order) {
    return [];
  }
  return data.order;
}
