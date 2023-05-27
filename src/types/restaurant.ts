export type Food = {
  id: string;
  name: string;
  price: number;
};

export type Restaurant = {
  id: string;
  name: string;
  category: string;
  menu: Food[];
}
