import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.tsx';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <ToastContainer position='bottom-left' autoClose={3000} />
    </ThemeProvider>
  </Provider>
);
