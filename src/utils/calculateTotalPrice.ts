import Food from '../types/Food';

export default function calculateTotalPrice(selectedFoods: Food[]) {
  return selectedFoods.reduce((acc, selectedFood) => acc + selectedFood.price, 0);
}
