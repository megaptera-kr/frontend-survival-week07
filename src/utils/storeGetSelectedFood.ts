import useStore from '../hooks/useStore';

export default function storeGetSelectedFood() {
  const store = useStore();
  const selectedFood = (store.state.selectedFood).map((food) => JSON.parse(food));

  return selectedFood;
}
