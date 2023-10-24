import { useRef, useState, ChangeEvent, RefObject } from 'react';
import { useFormikContext } from 'formik';
import { FormikValues } from 'formik/dist/types';
import { formatBytes } from 'src/common';

interface Return {
  handleSelectFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePick: () => void;
  filePicker: RefObject<HTMLInputElement>;
  errorMessage: string;
  handleRemoveImage: (idx: number) => void;
}

export const useSelectPhoto = (maxSize: number): Return => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const filePicker = useRef<HTMLInputElement>(null);

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileSize: number = file.size;

    if (fileSize > maxSize) {
      const maxSizeValid = formatBytes(maxSize);
      setErrorMessage(`Maximum file size is ${maxSizeValid}.`);
      return;
    }
    if (values.images.length >= 10) {
      setErrorMessage('You can add a maximum of 10 images.');
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const fileDataUrl = event.target?.result;
      const updatedImages = [...values.images, fileDataUrl];
      setFieldValue('images', updatedImages);
      setErrorMessage('');
    };

    reader.readAsDataURL(file);
  };

  const handlePick = () => {
    filePicker.current?.click();
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...values.images];
    updatedImages.splice(index, 1);
    setFieldValue('images', updatedImages);
  };

  return {
    handleRemoveImage,
    handleSelectFile,
    handlePick,
    filePicker,
    errorMessage,
  };
};
