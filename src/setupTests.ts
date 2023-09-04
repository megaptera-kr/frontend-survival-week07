/* eslint-disable import/no-extraneous-dependencies */
import server from './mocks/server';

import 'reflect-metadata';
import 'whatwg-fetch';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
