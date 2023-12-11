import styled from 'styled-components';

import { Outlet } from 'react-router';

import Stack from '../Stack';

import Header from '../../components/Header';

import Footer from '../../components/Footer';

const Wrraper = styled(Stack)`
  row-gap: 1.6rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;

export default function Layout() {
  return (
    <Wrraper $direction='column'>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrraper>
  );
}
