import { Typography, Button, Box } from '@mui/material';
import { BsPersonCircle } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { logout } from 'src/redux/user/userSlice';
import { useAppDispatch } from 'src/redux/hook';
import { removeUserFromLocalStorage, useAuth } from 'src/common';
import { typography } from 'src/theme';

interface Props {
  iconColor?: string;
  setIsShowDrawer?: Dispatch<SetStateAction<boolean>> | undefined;
}

export const AuthenticationButton = ({ iconColor = 'black', setIsShowDrawer }: Props) => {
  const dispatch = useAppDispatch();
  const isAuth = useAuth();

  return (
    <>
      {isAuth ? (
        <Button
          onClick={() => {
            dispatch(logout());
            removeUserFromLocalStorage('token');
            setIsShowDrawer?.((prev) => !prev);
            window.location.reload();
          }}
          variant='contained'
          endIcon={<FaSignOutAlt size={16} />}
          sx={{
            background: 'white',
            color: 'black',
            ': hover': { background: 'grey' },
          }}>
          <Typography textTransform='initial' variant='body2' fontWeight={typography.fontWeightSemiBold}>
            Log Out
          </Typography>
        </Button>
      ) : (
        <Box
          component={NavLink}
          to='auth'
          sx={{ ':hover': { color: 'grey' }, alignSelf: 'center', mt: 1 }}
          onClick={() => setIsShowDrawer?.((prev) => !prev)}>
          <Typography
            textTransform='initial'
            variant='subtitle1'
            fontWeight={typography.fontWeightBold}
            color={iconColor}>
            <BsPersonCircle size={30} />
          </Typography>
        </Box>
      )}
    </>
  );
};
