// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars
import { setupServer } from 'msw/node';
import handlers from './handlers';

const server = setupServer(...handlers);
export default server;
