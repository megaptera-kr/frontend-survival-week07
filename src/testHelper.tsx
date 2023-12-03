import { render } from '@testing-library/react';

import { ReactNode } from 'react';

import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

type Option = {
  path?: string;
};

type TestWrraperProps = { children: React.ReactNode };

function Wrapper({ children }: TestWrraperProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export function useRender(children: JSX.Element | JSX.Element[]) {
  return render(<Wrapper>{children}</Wrapper>);
}

export function renderWithProviders(
  node: ReactNode,
  { path = '/' }: Option = {},
) {
  return useRender(<MemoryRouter initialEntries={[path]}>{node}</MemoryRouter>);
}
