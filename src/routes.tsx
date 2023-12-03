import { ThemeProvider } from 'styled-components';
import { Layout } from './atoms';

import IntroPage from './pages/IntroPage';

import OrderPage from './pages/OrderPage';

import OrderCompletePage from './pages/OrderCompletePage';

import theme from '../styles/theme';

import GlobalStyles from '../styles/GlobalStyles';
import PATHNAME from './constants/pathname';

const routes = [
  {
    element: (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout />
      </ThemeProvider>
    ),
    children: [
      { path: PATHNAME.Home, element: <IntroPage /> },
      { path: PATHNAME.Order, element: <OrderPage /> },
      { path: PATHNAME.OrderComplete, element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
