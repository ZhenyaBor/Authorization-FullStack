import { IProduct } from '../interface';
import { Card, CardContent, CardMedia, Typography, Stack, CardActionArea, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { getUserDataFromLocalStorage } from 'src/common';
import { useDeleteProduct } from '../hooks';

interface Props extends IProduct {
  getProduct: () => void;
}

export const CardProduct = ({ id, title, description, images, price, getProduct }: Props) => {
  const navigate = useNavigate();
  const user = getUserDataFromLocalStorage();
  const { deleteProduct } = useDeleteProduct(getProduct);

  return (
    <Card
      sx={{
        position: 'relative',
        width: {
          xs: '100%',
          sm: 250,
        },
      }}>
      {user?.role === 'Admin' && (
        <IconButton
          aria-label='settings'
          sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
          onClick={() => {
            deleteProduct(id);
          }}>
          <AiFillCloseCircle />
        </IconButton>
      )}
      <CardActionArea onClick={() => navigate(`${+id}`)}>
        <CardMedia sx={{ height: 140 }} image={images[0] || '#'} title={title} />

        <CardContent>
          <Stack direction='column' justifyContent='space-between'>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              price: {price} $
            </Typography>
          </Stack>
          <Typography variant='body2' color='text.secondary'>
            {description.length > 150 ? `${description.slice(0, 150)}...` : description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
