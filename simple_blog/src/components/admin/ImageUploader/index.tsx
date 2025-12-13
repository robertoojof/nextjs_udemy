'use client';

import {
  deleteImage,
  uploadImage,
} from '@/app/actions/upload/upload-image.action';
import { Button } from '@/components/Button';
import {
  IMAGE_UPLOAD_MAX_FILE_SIZE_BYTES,
  IMAGE_UPLOAD_MAX_FILE_SIZE_MB,
} from '@/lib/constants';
import { ImageUpIcon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useTransition } from 'react';
import { toast } from 'react-toastify';

type ImageUploaderProps = {
  disabled?: boolean;
};

export function ImageUploader({ disabled = false }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const [isUploading, startTransition] = useTransition();

  function handleButtonClick() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleFileChange() {
    toast.dismiss();

    if (!fileInputRef.current) {
      setImgUrl('');
      return;
    }

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

    const formData = new FormData();
    formData.append('file', file);

    startTransition(async () => {
      const result = await uploadImage(formData);
      // console.log('Resultado do upload:', result);

      if (result.error) {
        toast.error(`${result.error}`);
        fileInput.value = '';
        return;
      }

      setImgUrl(result.url);
      toast.success(`Imagem enviada com sucesso! URL: ${result.url}`);
    });

    fileInput.value = '';
  }

  async function handleDeleteImage() {
    await deleteImage(imgUrl || '')
      .then(() => {
        toast.success('Imagem deletada do servidor');
      })
      .catch(() => {
        toast.error('Erro ao deletar a imagem do servidor');
      });

    fileInputRef.current!.value = '';
    setImgUrl(null);
    toast.info('Imagem removida');
  }

  return (
    <>
      <div className='flex flex-col gap-2 py-4'>
        <div className='flex gap-2'>
          <Button
            onClick={handleButtonClick}
            type='button'
            className='self-start'
            disabled={isUploading || disabled}
          >
            Enviar uma imagem <ImageUpIcon />
          </Button>
          <Button
            type='button'
            variant='danger'
            onClick={handleDeleteImage}
            disabled={!imgUrl || disabled}
          >
            <Trash2Icon />
          </Button>
        </div>

        <div className='text-sm text-slate-600'>
          {imgUrl && (
            <div className='flex flex-col gap-4'>
              <p>
                <b>URL:</b> {imgUrl}
              </p>

              <Image
                src={imgUrl}
                width={1200}
                height={720}
                className='w-auto h-auto rounded object-cover'
                alt='Preview'
                unoptimized
              />
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          onChange={handleFileChange}
          className='hidden'
          type='file'
          name='file'
          accept='image/*'
          disabled={isUploading || disabled}
        />
      </div>
    </>
  );
}
