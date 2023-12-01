import React from 'react';

type Props = {
    categories : string[],
    setCategory : React.Dispatch<React.SetStateAction<string>>;
}

function CategoryButtons({ categories, setCategory }:Props) {
  const handleClick = (category : string) => {
    setCategory(category);
  };

  return (
    <ul style={{ display: 'flex' }}>
      {['전체', ...categories].map((category) => (
        <li key={category}>
          <button type="button" onClick={() => handleClick(category)}>{category}</button>
        </li>
      ))}
    </ul>
  );
}

export default CategoryButtons;
