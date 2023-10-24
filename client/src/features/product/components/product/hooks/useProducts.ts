import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { instance } from 'src/common/api/axios.api';
import { IProduct } from '../interface';

export const useProducts = () => {
  const [products, setProduct] = useState<IProduct[] | null>(null);

  const getProduct = async () => {
    try {
      const result = await instance.get(`product`);
      setProduct(result.data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return {
    products,
    getProduct,
  };
};
