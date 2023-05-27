import 'reflect-metadata';

import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ));
}

main();
