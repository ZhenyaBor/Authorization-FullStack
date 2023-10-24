/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { AppBar, Box, IconButton, Stack, Drawer, Toolbar, Typography } from '@mui/material';
import { FaProductHunt } from 'react-icons/fa';
import { AiTwotoneHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { DrawerList, ListItem } from './components';
import { IHeaderMenu } from './interface';

export const headerMenu: IHeaderMenu[] = [
  { id: 1, pageTitle: 'Home', pageLink: '/', pageIcon: <AiTwotoneHome size={20} /> },
  { id: 2, pageTitle: 'Product', pageLink: '/product', pageIcon: <FaProductHunt size={20} /> },
];

export const Header = () => {
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false);

  return (
    <>
      <AppBar position='static' sx={{ background: 'black' }}>
        <Toolbar sx={{ '&.MuiToolbar-root': { paddingX: 5 } }}>
          <IconButton size='large' edge='start' color='inherit' aria-label='open drawer' sx={{ mr: 2 }}>
            <Typography variant='h6' noWrap component='div'>
              MUI
            </Typography>
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction='row' alignItems='center' spacing={5}>
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none', color: 'white' } }}
              onClick={() => setIsShowDrawer(!isShowDrawer)}>
              <GiHamburgerMenu size={20} />
            </IconButton>
            <ListItem headerMenu={headerMenu} />
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{ '.MuiPaper-root': { width: '250px' } }}
        open={isShowDrawer}
        onClose={() => setIsShowDrawer(!isShowDrawer)}>
        <DrawerList headerMenu={headerMenu} setIsShowDrawer={setIsShowDrawer} />
      </Drawer>
    </>
  );
};
