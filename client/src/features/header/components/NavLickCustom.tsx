import { Box as BoxMui, styled, BoxProps } from '@mui/material';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ActiveLine } from '../components';

const Box = styled(BoxMui)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 700,
  color: 'white',
  textDecoration: 'none',
  padding: '10px',
  '& .MuiBox-root': {
    color: theme.palette.grey[900],
  },
  '&.active': {
    color: theme.palette.primary.main,
    transition: 'all 0.5s',
  },
}));

type Props = BoxProps &
  NavLinkProps & {
    isSelected: boolean;
  };

export const NavLickCustom = ({ isSelected, ...props }: Props): JSX.Element => (
  <motion.div>
    <Box component={NavLink} {...props} />
    {isSelected && <ActiveLine />}
  </motion.div>
);
