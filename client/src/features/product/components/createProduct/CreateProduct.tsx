import { Grid, Typography, Divider, Button } from '@mui/material';
import { theme } from 'src/theme';
import { useCreateProduct } from './hooks';
import { FormikProvider } from 'formik';
import { CreateForm, ImageField } from './views';

export const CreateProduct = () => {
  const formik = useCreateProduct();

  return (
    <FormikProvider value={formik}>
      <Grid item container component='form' noValidate autoComplete='off' spacing={5} onSubmit={formik.handleSubmit}>
        <Grid item>
          <Typography variant='h3' fontWeight={theme.typography.fontWeightBold}>
            Create Product
          </Typography>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item xs={12} md={8} lg={3}>
            <CreateForm />
          </Grid>
          <Grid item>
            <Divider orientation='vertical' variant='middle' flexItem />
          </Grid>
          <Divider orientation='vertical' variant='middle' flexItem sx={{ display: { xs: 'none', lg: 'block' } }} />
          <Grid item xs={12} md={8} lg={8}>
            <ImageField />
          </Grid>
        </Grid>
        <Button
          variant='contained'
          type='submit'
          disabled={formik.isSubmitting || !formik.dirty}
          sx={{ width: { xs: '100%', lg: '300px' }, height: '50px', m: '50px 0 0 20px' }}>
          Save Change
        </Button>
      </Grid>
    </FormikProvider>
  );
};
