import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import App from './App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from '@components/common/Loading/Loading';
import ErrorBoundary from '@components/common/ErrorBoundary/ErrorBoundary';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
