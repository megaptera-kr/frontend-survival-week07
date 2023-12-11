const foodCategory = {
  kr: '한식',
  jp: '일식',
  ch: '중식',
} as const;

type FoodCategory = typeof foodCategory;

type FoodCategoryKey = keyof FoodCategory;

type FoodCategoryValue = FoodCategory[FoodCategoryKey];

interface Menu {
  id: string;
  name: string;
  price: number;
}

type MenuList = Menu[];

interface Restaurant {
  id: string;
  category: FoodCategoryValue;
  name: string;
  menu: MenuList
}

type RestaurantList = Restaurant[];

type GetRestaurantsResponse = {
  restaurants: RestaurantList;
};

interface PostOrdersPayload {
  menu: MenuList;
  totalPrice: number;
}

interface Receipt {
  id: string;
  menu: MenuList;
  totalPrice: number;
}

interface Order {
  id: string;
  menu: MenuList;
  totalPrice: number;
}

type PostOrdersResponse = {
  id: string;
};

type GetOrdersPayload = {
  id: string;
}

type GetOrdersResponse = {
  order: Order;
}

export {
  foodCategory,
  FoodCategory,
  FoodCategoryKey,
  FoodCategoryValue,
  Menu,
  MenuList,
  Restaurant,
  RestaurantList,
  PostOrdersPayload,
  Receipt,
  PostOrdersResponse,
  GetRestaurantsResponse,
  Order,
  GetOrdersPayload,
  GetOrdersResponse,
};
