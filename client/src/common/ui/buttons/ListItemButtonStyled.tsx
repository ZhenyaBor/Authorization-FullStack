import { ListItemButtonProps, styled } from '@mui/material';
import { ListItemButtonRoute } from '../../../common';
import { palette } from '../../../theme';

export const ListItemButtonStyled = styled(ListItemButtonRoute)<ListItemButtonProps>(({ theme }) => ({
  borderBottom: `1px solid ${palette.grey[100]}`,
  height: '48px',
  '&.Mui-selected': {
    position: 'relative',
    backgroundColor: 'transparent',
    '.MuiTypography-root': {
      fontWeight: theme.typography.fontWeightBold,
    },
    '&:after': {
      content: "''",
      position: 'absolute',
      right: 0,
      width: '4px',
      height: '19px',
      backgroundColor: theme.palette.primary.main,
      borderTopLeftRadius: '9px',
      borderBottomLeftRadius: '9px',
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    '&:not(&.Mui-selected)': {
      '&:after': {
        content: "''",
        position: 'absolute',
        right: 0,
        width: '4px',
        height: '10px',
        backgroundColor: theme.palette.grey[300],
        borderTopLeftRadius: '9px',
        borderBottomLeftRadius: '9px',
      },
    },
  },
  '&:active, &:focus': {},
}));
