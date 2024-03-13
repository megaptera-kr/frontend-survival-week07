import MenuType from './MenuType';

type RestaurantType = {
  id: number;
  name: string;
  category: string;
  menu: MenuType[];
};

export default RestaurantType;
