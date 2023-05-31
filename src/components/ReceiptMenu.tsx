import Food from '../types/Food';

type ReceiptMenuProps = {
  menu : Food
}

export default function ReceiptMenu({ menu }:ReceiptMenuProps) {
  return (
    <div>
      {menu.name}
      {menu.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      원
    </div>
  );
}
