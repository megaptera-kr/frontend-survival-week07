import Store from './Store';

import Cart from '../models/Cart';
import Item from '../models/Item';

export type CartStoreSnapshot = {
  items: Item[];
}

export default class CartStore extends Store<CartStoreSnapshot> {
    cart = new Cart();

    constructor() {
        super();
        this.takeSnapshot();
    }

    addItem({
        productId, name, price, quantity,
    }: {
    productId: number;
    name: string;
    price: number;
    quantity: number;
  }) {
        this.cart = this.cart.addItem({
            productId, name, price, quantity,
        });

        this.update();
    }

    private update() {
        this.takeSnapshot();
        this.publish();
    }

    private takeSnapshot() {
        this.snapshot = {
            items: this.cart.items,
        };
    }
}
