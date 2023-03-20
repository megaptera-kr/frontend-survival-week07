import { Link } from 'react-router-dom';

export default function OrderPage() {
    return (
        <div>
            <h1>이대로 주문하시겠어요?</h1>
            <Link to='/ordercomplete'>
                <button>결제</button>
            </Link>
        </div>
    );
}
