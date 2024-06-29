// src/pages/_app.tsx
import { Provider } from 'react-redux';
import store from '../store';
import { useEffect } from 'react';
import { loginSuccess } from '../store/slices/authSlice';
import './globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      store.dispatch(loginSuccess(JSON.parse(user)));
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
