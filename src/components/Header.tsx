import { NavLink } from 'react-router-dom';

type LinkItem = {
    url: string,
    title: string
}

const linkItems: LinkItem[] = [
  { url: '/', title: 'Home' },
  { url: '/restaurants', title: '식당 목록' },
  { url: '/cart', title: '장바구니' },
];

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {linkItems.map(({ url, title }) => (
            <li key={url}>
              <NavLink to={url}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
