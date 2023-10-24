import { Stack, Button, Typography, Alert } from '@mui/material';
import { useSelectPhoto } from '../hooks';
import { palette } from 'src/theme';
import { ImageList } from '../views';
import { useFormikContext } from 'formik';
import { FormValues } from '../interface';

const MAX_FILE_SIZE = 100 * 1024;
const ALLOWED_EXTENSION = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'web'];

export const ImageField = () => {
  const { handleSelectFile, handlePick, filePicker, errorMessage, handleRemoveImage } = useSelectPhoto(MAX_FILE_SIZE);
  const { values } = useFormikContext<FormValues>();

  return (
    <Stack direction='column' spacing={5}>
      <input
        style={{ display: 'none' }}
        ref={filePicker}
        onChange={handleSelectFile}
        name='profile.picture'
        type='file'
        accept={ALLOWED_EXTENSION.map((ext) => `image/${ext}`).join(',')}
      />

      <Stack direction='row' alignItems='center' justifyContent='flex-start' flexWrap='wrap' sx={{ gap: 5 }}>
        {values.images.length ? (
          <ImageList handleRemoveImage={handleRemoveImage} images={values.images} />
        ) : (
          <Typography variant='h5'>Add photos</Typography>
        )}
      </Stack>

      <Button
        variant='contained'
        size='large'
        sx={{
          width: 180,
          background: palette.grey[700],
          '&:hover': {
            backgroundColor: palette.grey[600],
          },
        }}
        onClick={handlePick}>
        <Typography variant='button' noWrap textTransform='initial'>
          Add photos
        </Typography>
      </Button>
      {errorMessage && (
        <Alert sx={{ width: 'max-content', padding: '0 8px' }} icon={false} variant='outlined' severity='error'>
          {errorMessage}
        </Alert>
      )}
    </Stack>
  );
};
