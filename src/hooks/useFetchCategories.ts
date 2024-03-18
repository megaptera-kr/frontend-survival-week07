import { useEffect, useState } from 'react';

import CategoryAPI from '../apis/CategoryAPI';
import CategoryType from '../types/CategoryType';
import CategoryModel from '../models/CategoryModel';

type useFetchCategoriesReturnType = {
  categories: CategoryModel[];
};

const api = new CategoryAPI();

function useFetchCategories(): useFetchCategoriesReturnType {
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: CategoryType[] = await api.select();
      const models: CategoryModel[] = data.map(
        (item: CategoryType) => new CategoryModel({ ...item }),
      );

      setCategories(models);
    };

    fetchData();
  }, []);

  return { categories };
}

export default useFetchCategories;
