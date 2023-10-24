import { useAppSelector } from '../../redux/hook';

export const useAuth = () => {
  return useAppSelector((state) => state.user.isAuth);
};
