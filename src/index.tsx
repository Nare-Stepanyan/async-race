import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { store } from './store/index.ts';

const root = createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
