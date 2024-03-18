import Menu from './MenuType';

type Restaurant = {
  id: number;
  name: string;
  category: string;
  menu: Menu[];
};

export default Restaurant;
