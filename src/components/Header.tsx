import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><Link to="/restaurants">식당 목록</Link></li>
                    <li><Link to="/cart">장바구니</Link></li>
                </ul>
            </nav>
        </header>
    );
}
