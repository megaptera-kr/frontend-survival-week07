import React from 'react';
import useDispatch from '../hooks/useDispatch';
import useStore from '../hooks/useStore';
import { inputText } from '../store/Stores';

export default function TextField() {
  const dispatch = useDispatch();
  const store = useStore();
  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    dispatch(inputText(e.target.value));
  }
  return (
    <label>
      검색
      <input type="text" placeholder="식당 이름을 입력해주세요" value={store.state.Text} onChange={handleChange} />
    </label>
  );
}
