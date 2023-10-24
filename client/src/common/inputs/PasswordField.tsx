import { useState } from 'react';
import { Typography, Box, InputAdornment, IconButton, TextFieldProps, OutlinedInputProps } from '@mui/material';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
import { TextFieldPrimary } from '../../common';

type Props = OutlinedInputProps & TextFieldProps;

export const PasswordField = ({ label, sx, ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box sx={sx}>
      {label && (
        <Typography sx={{ mb: '6px' }} variant='subtitle2'>
          {label}
        </Typography>
      )}
      <TextFieldPrimary
        {...props}
        fullWidth
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                {showPassword ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
