import { BrowserRouter } from 'react-router-dom';
import { Router, getUserDataFromLocalStorage } from './common';
import { useAppDispatch } from './redux/hook';
import { authService } from './common/services';
import { login, logout } from './redux/user/userSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const user = getUserDataFromLocalStorage();
      try {
        if (user) {
          const data = await authService.getMe();
          if (data) {
            dispatch(login(data));
          } else {
            dispatch(logout());
          }
        }
      } catch (err: any) {
        throw Error(err);
      }
    };

    checkAuth();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
