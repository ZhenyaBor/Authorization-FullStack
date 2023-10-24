import { createTheme } from '@mui/material/styles';

import { palette } from './palette';
import { general } from './general';
import { typography } from './typography';

const initTheme = {
  ...general,
  palette,
  typography,
};

export const theme = createTheme(initTheme);
