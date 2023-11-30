import { NavLink } from 'react-router-dom';
import { NavigationInterface } from './Navigation.interface';

function Navigation() {
  const navigationList : NavigationInterface[] = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Order',
      url: '/order',
    },
  ];
  return (
    // <ul>
    //   {navigationList.map((nav) => (
    //     <li key={nav.text}>
    //       {nav.text}
    //     </li>
    //   ))}
    // </ul>
  );
}

export default Navigation;
