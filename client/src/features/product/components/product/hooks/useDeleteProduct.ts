import { toast } from 'react-toastify';
import { instance } from 'src/common/api/axios.api';

interface Return {
  deleteProduct: (id: number) => Promise<void>;
}

export const useDeleteProduct = (getProduct: () => void): Return => {
  const deleteProduct = async (id: number) => {
    try {
      await instance.delete(`/product/${id}`);
      toast.success('Delete product');
      getProduct();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return {
    deleteProduct,
  };
};
