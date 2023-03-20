export default class Item {
  readonly id;

  readonly productId;

  readonly name;

  readonly price;

  readonly quantity;

  constructor({
    id, productId, name, price, quantity,
  }: {
    id: number;
    productId: number;
    name: string;
    price: number;
    quantity: number;
  }) {
    this.id = id;
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
