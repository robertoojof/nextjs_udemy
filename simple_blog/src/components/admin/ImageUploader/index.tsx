'use client';

import { uploadImage } from '@/app/actions/upload/upload-image.action';
import { Button } from '@/components/Button';
import {
  IMAGE_UPLOAD_MAX_FILE_SIZE_BYTES,
  IMAGE_UPLOAD_MAX_FILE_SIZE_MB,
} from '@/lib/constants';
import { ImageUpIcon } from 'lucide-react';
import { useRef, useTransition } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();

  function handleButtonClick() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleFileChange() {
    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    // .files pq pode ser configurado para enviar mais de um arquivo
    const file = fileInput.files?.[0];

    if (!file) return;

    console.log('Arquivo selecionado:', file);

    if (file.size > IMAGE_UPLOAD_MAX_FILE_SIZE_BYTES) {
      toast.error(
        `O arquivo deve ser menor que ${IMAGE_UPLOAD_MAX_FILE_SIZE_MB}MB`,
      );
      fileInput.value = '';
      return;
    }

    // TODO: Implementar upload para o servidor (ACTION)
    const formData = new FormData();
    formData.append('file', file);

    startTransition(async () => {
      const result = await uploadImage(formData);
      console.log('Resultado do upload:', result);
    });

    fileInput.value = '';
  }

  return (
    <div className='flex flex-col gap-2 py-4'>
      <Button onClick={handleButtonClick} type='button' className='self-start'>
        Enviar uma imagem <ImageUpIcon />
      </Button>
      <input
        ref={fileInputRef}
        onChange={handleFileChange}
        className='hidden'
        type='file'
        name='file'
        accept='image/*'
      />
    </div>
  );
}
