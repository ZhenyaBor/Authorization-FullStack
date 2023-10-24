import { Route, Routes } from 'react-router-dom';
import { DetailProduct, CreateProduct, Product } from './components';
import { PrivateRoute } from 'src/common';

export const ProductFeature = () => (
  <Routes>
    <Route index element={<Product />} />
    <Route path=':prodId/' element={<DetailProduct />} />
    <Route
      path='create/'
      element={
        <PrivateRoute>
          <CreateProduct />
        </PrivateRoute>
      }
    />
  </Routes>
);
