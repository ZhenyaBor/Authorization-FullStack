import { useRoutes } from 'react-router-dom';
import { routes } from '../../config';

export const Router = () => {
  const routing = useRoutes(routes);

  return routing;
};
