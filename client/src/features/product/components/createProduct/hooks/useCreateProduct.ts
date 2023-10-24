import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { instance } from 'src/common/api/axios.api';
import * as yup from 'yup';
import { FormValues } from '../interface';

const defaultValues: FormValues = {
  title: '',
  description: '',
  images: [],
  price: '',
};

const schema = yup.object({
  title: yup.string().trim(),
  price: yup
    .string()
    .trim()
    .matches(/^\d+(\.\d{1,2})?$/, 'Price should be a number'),
  description: yup.string().trim(),
});

export const useCreateProduct = () => {
  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await instance.post('/product', {
        title: values.title,
        description: values.description,
        images: values.images,
        price: values.price,
      });
      const productId = response.data.id;

      toast.success(`you added new the product id : ${productId}`);
      formik.resetForm();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: defaultValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return formik;
};
