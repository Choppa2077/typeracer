import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FpjsProvider
      loadOptions={{
        apiKey: 'V0SnVXWL1O22NXaqWo18',
        region: 'ap',
      }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </FpjsProvider>
  </React.StrictMode>,
);
