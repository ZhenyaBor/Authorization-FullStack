import { motion, MotionProps } from 'framer-motion';
import { Box, BoxProps } from '@mui/material';

export const ActiveLine = (props: MotionProps & BoxProps): JSX.Element => (
  <Box
    component={motion.div}
    layoutId='activeItem'
    sx={{
      width: '100%',
      height: '3px',
      position: 'absolute',
      bottom: '-5px',
      background: '#F2387B',
    }}
    {...props}
  />
);
