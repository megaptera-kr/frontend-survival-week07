import React from 'react';
import { Menu } from '../types';
import useDispatch from '../hooks/useDispatch';

type Props = {
    food : Menu
}

function MenuRow({ food }:Props) {
  const dispatch = useDispatch();

  const handleAddOrder = () => {
    dispatch({
      type: 'addOrderList', payload: food,
    });
  };

  return (
    <li key={food.id}>
      <button type="button" onClick={handleAddOrder}>
        {food.name}
        {' '}
        {food.price.toLocaleString()}
        원
      </button>
    </li>
  );
}

export default MenuRow;
