import { Box, Stack, Typography } from '@mui/material';

export const NotFound = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box
        component='img'
        src='/notFound.svg'
        sx={{
          width: '50%',
          height: '60%',
        }}
      />
      <Typography sx={{ fontSize: { xs: '20px', lg: '40px' } }}>Not Found</Typography>
    </Stack>
  );
};
