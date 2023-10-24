import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setUserFromLocalStorage } from 'src/common';
import { useAppDispatch } from 'src/redux/hook';
import { authService } from 'src/common/services';
import { login } from 'src/redux/user/userSlice';
import { IValue } from 'src/common/interface';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginHandler = async (values: IValue) => {
    try {
      const data = await authService.login({ ...values });
      if (data) {
        navigate('/');
        dispatch(login(data));
        toast.success('You logged in.');
        setUserFromLocalStorage('token', data.token, data.role);
        window.location.reload();
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message);
    }
  };

  return {
    loginHandler,
  };
};
