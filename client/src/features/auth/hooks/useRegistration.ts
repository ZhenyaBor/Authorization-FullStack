import { toast } from 'react-toastify';
import { authService } from '../../../common/services';
import { Dispatch, SetStateAction } from 'react';
import { IValue } from '../../../common/interface';

export const useRegistration = (setIsLogin: Dispatch<SetStateAction<boolean>>) => {
  const registrationHandler = async (values: IValue) => {
    try {
      const data = await authService.registration({ ...values });
      if (data) {
        setIsLogin((prev: boolean) => !prev);
        toast.success('Account has been created.');
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message);
    }
  };

  return {
    registrationHandler,
  };
};
