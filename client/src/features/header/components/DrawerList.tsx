import { Dispatch, SetStateAction } from 'react';
import { Box, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { ListItemButtonStyled, getUserDataFromLocalStorage } from 'src/common';
import { AuthenticationButton } from './AuthenticationButton';
import { IHeaderMenu } from '../interface';

interface Props {
  headerMenu: IHeaderMenu[];
  setIsShowDrawer: Dispatch<SetStateAction<boolean>>;
}

export const DrawerList = ({ headerMenu, setIsShowDrawer }: Props) => {
  const { pathname } = useLocation();
  const user = getUserDataFromLocalStorage();

  return (
    <Stack direction='column' alignItems='center'>
      {headerMenu.map((menu) => {
        if (user?.role !== 'Admin' && menu.pageTitle === 'Admin') return null;

        return (
          <ListItemButtonStyled
            onClick={() => setIsShowDrawer((prev) => !prev)}
            key={menu.id}
            component={Link}
            to={menu.pageLink}
            selected={pathname === menu.pageLink}
            sx={{ width: '100%' }}>
            <ListItemButton>
              <ListItemIcon>{menu.pageIcon}</ListItemIcon>
              <ListItemText primary={menu.pageTitle} />
            </ListItemButton>
          </ListItemButtonStyled>
        );
      })}

      <Box sx={{ position: 'absolute', bottom: 20 }}>
        <AuthenticationButton setIsShowDrawer={setIsShowDrawer} />
      </Box>
    </Stack>
  );
};
