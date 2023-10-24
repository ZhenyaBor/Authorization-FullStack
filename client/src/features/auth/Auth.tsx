import { useState } from 'react';
import { Stack, Typography, Button, FormControlLabel, Checkbox, Grid } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { PasswordField, TextFieldPrimary } from 'src/common';
import { useLogin, useRegistration } from './hooks';
import { typography } from 'src/theme';

const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Required!'),
  password: Yup.string().min(7, 'Password cannot be less than 7 characters!').required('Required!'),
});

const initialValues = { email: '', password: '' };

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const { registrationHandler } = useRegistration(setIsLogin);
  const { loginHandler } = useLogin();

  return (
    <Grid container justifyContent='center' alignItems='center' sx={{ mt: 10 }}>
      <Grid item xs={12} sm={8} md={6} xl={3.5}>
        <Typography variant='h3' fontWeight={typography.fontWeightBold} color='black' textAlign='center'>
          {isLogin ? 'Login' : 'Registration'}
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={(values) => (isLogin ? loginHandler(values) : registrationHandler(values))}>
          {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, dirty }) => (
            <form onSubmit={handleSubmit}>
              <Stack spacing={5}>
                <TextFieldPrimary
                  name='email'
                  fullWidth
                  label='Email'
                  variant='outlined'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={Boolean(errors.email) && Boolean(errors.email)}
                  helperText={errors.email && String(errors.email)}
                />

                <PasswordField
                  name='password'
                  fullWidth
                  label='Password'
                  type='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={Boolean(errors.password) && Boolean(errors.password)}
                  helperText={errors.password && String(errors.password)}
                />

                <FormControlLabel
                  sx={{ '.MuiFormControlLabel-label': { fontSize: '16px' } }}
                  label={isLogin ? 'You don`t have an account?' : 'Already have an account?'}
                  control={<Checkbox checked={isLogin} onChange={() => setIsLogin((prev: boolean) => !prev)} />}
                />

                <Button
                  variant='contained'
                  type='submit'
                  disabled={isSubmitting || !dirty}
                  sx={{ height: '50px', borderRadius: 2 }}>
                  Submit
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};
