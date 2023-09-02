import React, { MouseEvent } from 'react';

type CategoryProps = {
  category: string;
  onClickCategoryBtn: (value: string) => void;
}

export default function Category({ category, onClickCategoryBtn }: CategoryProps) {
  return (
    <li key={category}>
      <button
        type="button"
        onClick={() => onClickCategoryBtn(category)}
      >
        {category}
      </button>
    </li>
  );
}
