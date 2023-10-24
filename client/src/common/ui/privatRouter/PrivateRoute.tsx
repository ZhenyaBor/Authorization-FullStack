import { getUserDataFromLocalStorage, useAuth } from '../../helpers';
import { Auth } from '../../../features';

interface Props {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: Props) => {
  const isAuth = useAuth();
  const user = getUserDataFromLocalStorage();

  return <>{isAuth && user?.role === 'Admin' ? children : <Auth />}</>;
};
