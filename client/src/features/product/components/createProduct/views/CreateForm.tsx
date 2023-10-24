import { Stack } from '@mui/material';
import { useFormikContext } from 'formik';
import { TextFieldPrimary } from 'src/common';
import { FormValues } from '../interface';

export const CreateForm = () => {
  const { values, handleChange, handleBlur, errors } = useFormikContext<FormValues>();

  return (
    <Stack spacing={5}>
      <TextFieldPrimary
        label='Title'
        placeholder='Title'
        name='title'
        value={values.title}
        onBlur={handleBlur}
        onChange={handleChange}
        error={Boolean(errors.title) && Boolean(errors.title)}
        helperText={errors.title && String(errors.title)}
      />
      <TextFieldPrimary
        label='Description'
        placeholder='Description'
        name='description'
        value={values.description}
        onBlur={handleBlur}
        onChange={handleChange}
        error={Boolean(errors.description) && Boolean(errors.description)}
        helperText={errors.description && String(errors.description)}
      />
      <TextFieldPrimary
        label='Price'
        placeholder='Price'
        name='price'
        value={values.price}
        onBlur={handleBlur}
        onChange={handleChange}
        error={Boolean(errors.price) && Boolean(errors.price)}
        helperText={errors.price && String(errors.price)}
      />
    </Stack>
  );
};
