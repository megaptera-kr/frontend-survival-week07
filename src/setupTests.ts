/* eslint-disable import/no-extraneous-dependencies */
import 'reflect-metadata';
import 'whatwg-fetch';

import server from './mocks/server';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});
