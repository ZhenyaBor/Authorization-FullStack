import { Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getUserDataFromLocalStorage } from 'src/common';
import { AuthenticationButton, NavLickCustom } from '../components';
import { IHeaderMenu } from '../interface';

interface Props {
  headerMenu: IHeaderMenu[];
}

export const ListItem = ({ headerMenu }: Props) => {
  const { pathname } = useLocation();
  const user = getUserDataFromLocalStorage();

  return (
    <Stack direction='row' alignItems='center' spacing={5} sx={{ display: { xs: 'none', md: 'flex' } }}>
      {headerMenu.map((menu) => {
        if (user?.role !== 'Admin' && menu.pageTitle === 'Admin') return null;
        return (
          <Stack key={menu.id} sx={{ position: 'relative' }}>
            <NavLickCustom to={menu.pageLink} isSelected={pathname === menu.pageLink}>
              {menu.pageTitle}
            </NavLickCustom>
          </Stack>
        );
      })}
      <AuthenticationButton iconColor='white' />
    </Stack>
  );
};
