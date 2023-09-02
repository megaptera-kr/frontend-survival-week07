import Food from './Food';

interface OrderInfo {
    order: {
        id: number,
        menu: Food[],
        totalPrice: number,
    }
}

export default OrderInfo;
