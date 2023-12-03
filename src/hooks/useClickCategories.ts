import checkCategoryType from '../utils/checkCategoryType';

import useSearchStore from './useSearchStore';

export default function useClickCategories() {
  const [{ category }, store] = useSearchStore();

  const handleClickCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    if (category !== value && checkCategoryType(value)) {
      store.setCategories(value);
    }
  };

  return { category, handleClickCategory };
}
