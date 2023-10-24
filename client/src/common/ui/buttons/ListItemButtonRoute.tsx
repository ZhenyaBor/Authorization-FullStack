import { ElementType } from 'react';
import { ListItemButton as ListItemButtonMui, ListItemButtonProps } from '@mui/material';

export const ListItemButtonRoute = <C extends ElementType>(props: ListItemButtonProps<C, { component?: C }>) => (
  <ListItemButtonMui {...props} />
);
