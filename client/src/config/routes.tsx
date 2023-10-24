import { Home, ProductFeature, Auth, NotFound } from '../features';
import { LMSLayout } from '../layouts';

export const routes = [
  {
    element: <LMSLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'product/*', element: <ProductFeature /> },
      { path: 'auth', element: <Auth /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
