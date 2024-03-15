// eslint-disable-next-line import/no-extraneous-dependencies
import 'reflect-metadata';

import 'whatwg-fetch';

import server from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
