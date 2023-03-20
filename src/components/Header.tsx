import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/list'>식당목록</Link>
                    </li>
                    <li>
                        <Link to='/cart'>장바구니</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
