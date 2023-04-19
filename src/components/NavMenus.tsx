import { NavLink, RelativeRoutingType } from 'react-router-dom';

type Menus = {
  path: string;
  label: string;
}

interface NavMenusProps {
  menus: Menus[];
  // eslint-disable-next-line react/require-default-props
  relative?: RelativeRoutingType;
}

export default function NavMenus({ menus, relative = undefined }: NavMenusProps) {
  return (
    <ul style={{ display: 'flex', columnGap: '6px', listStyle: 'none' }}>
      {
        menus.map((menu) => (
          <li key={menu.path}>
            <NavLink
              to={menu.path}
              relative={relative}
              style={
                ({ isActive }) => ({
                  color: isActive ? 'yellow' : 'black',
                  backgroundColor: isActive ? 'green' : 'transparent',
                })
              }
            >
              {menu.label}
            </NavLink>
          </li>
        ))
      }
    </ul>
  );
}
