import CartItem from './CartItem';
import useCartStore from '../hooks/useCartStore';
import Summary from './Summary';

export default function Cart() {
  const [{ menu }, store] = useCartStore();

  const handelClickRemove = (index: number) => {
    store.removeItem(index);
  };

  return (
    <section>
      <Summary selectedMenu={menu} />
      <div>
        {menu.map((food, index) => {
          const key = `${food.id}_${index}`;
          return (
            <CartItem
              key={key}
              index={index}
              food={food}
              onClickItem={handelClickRemove}
            />
          );
        })}
      </div>
    </section>
  );
}
