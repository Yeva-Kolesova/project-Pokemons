import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './reduxConfig/store';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename='/project-Pokemons'>
        <App />
        <ToastContainer
          position='top-center'
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          theme='colored' />
      </BrowserRouter>
    </PersistGate>
  </Provider>);
