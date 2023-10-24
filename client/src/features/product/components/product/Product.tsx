import { Button, Stack } from '@mui/material';
import { useProducts } from './hooks';
import { IProduct } from './interface';
import { CardProduct } from './views';
import { useNavigate } from 'react-router-dom';
import { getUserDataFromLocalStorage, useAuth } from 'src/common';

export const Product = () => {
  const isAuth = useAuth();
  const user = getUserDataFromLocalStorage();
  const { products, getProduct } = useProducts();
  const navigate = useNavigate();

  return (
    <Stack spacing={3}>
      {isAuth && user?.role === 'Admin' && (
        <Button variant='contained' color='success' onClick={() => navigate('create')}>
          Create new Product
        </Button>
      )}
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        flexWrap='wrap'
        spacing={4}>
        {products?.map((product: IProduct) => <CardProduct key={product.id} {...product} getProduct={getProduct} />)}
      </Stack>
    </Stack>
  );
};
