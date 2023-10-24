import { Box, Stack } from '@mui/material';
import { Header } from '../features';
import { Outlet } from 'react-router-dom';
import { palette } from 'src/theme';

export const LMSLayout = () => (
  <Stack direction='column'>
    <Header />
    <Box
      component='main'
      sx={{
        width: '100%',
        flexGrow: 1,
        minHeight: 'calc(100vh - 66px)',
        backgroundColor: palette.grey[100],
        px: 4,
        pt: 3,
        pb: 6,
      }}>
      <Outlet />
    </Box>
  </Stack>
);
