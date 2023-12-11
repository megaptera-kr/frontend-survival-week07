export type Menu = {
    id : string;
    name : string;
    price : number
}

export type Restaurant = {
    id : string;
    category : string;
    name : string;
    menu : Menu[]
}

export type Order = {
    id: string,
    menu : Menu[],
    totalPrice : number
}
