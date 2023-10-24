import { Avatar, IconButton, Stack } from '@mui/material';
import { AiFillCloseCircle } from 'react-icons/ai';

interface Props {
  handleRemoveImage: (idx: number) => void;
  images: string[];
}

export const ImageList = ({ handleRemoveImage, images }: Props) => (
  <Stack direction='row' alignItems='center' justifyContent='flex-start' flexWrap='wrap' sx={{ gap: 5 }}>
    {images.map((image: string, idx: number) => (
      <Stack key={idx} direction='row' alignItems='center' sx={{ position: 'relative' }}>
        <Avatar
          variant='square'
          src={image}
          sx={{
            '&.MuiAvatar-root:not(style)~.MuiAvatar-root:not(:last-child)': { ml: 0 },
            width: 150,
            height: 150,
            borderRadius: '8px',
          }}
        />
        <IconButton onClick={() => handleRemoveImage(idx)} sx={{ position: 'absolute', top: 0, right: 0 }}>
          <AiFillCloseCircle />
        </IconButton>
      </Stack>
    ))}
  </Stack>
);
