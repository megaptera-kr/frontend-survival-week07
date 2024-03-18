import { HTMLAttributes } from 'react';

import Menu from '../types/Menu';

interface MenuItemProps extends HTMLAttributes<Element> {
  menu: Menu;
}

export default function MenuItem({ menu, children }: MenuItemProps) {
  return (
    <li key={menu.id}>
      {children}
    </li>
  );
}
