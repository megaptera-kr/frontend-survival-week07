import NavMenus from './NavMenus';
import NAV_MENUS from '../static/navbar';

export default function Header() {
  return (
    <header>
      <NavMenus menus={NAV_MENUS} />
    </header>
  );
}
