import App from './App';
import Layout from './Layout';
import RestaurantListPage from './pages/RestaurantListPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import OrderPage from './pages/OrderPage';
import OrderCompletePage from './pages/OrderCompletePage';


const routes = [
    {
        element: <Layout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/restaurants', element: <RestaurantListPage /> },
            { path: '/restaurants/:restaurantId', element: <RestaurantDetailPage /> },
            { path: '/cart', element: <CartPage /> },
            { path: '/order', element: <OrderPage /> },
            { path: '/ordercomplete', element: <OrderCompletePage /> },

        ],
    },
];

export default routes;