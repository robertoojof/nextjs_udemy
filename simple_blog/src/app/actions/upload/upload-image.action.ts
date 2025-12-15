'use server';

import { logColor } from '@/utils/log-color';
import { mkdir, writeFile } from 'fs/promises';
import { extname, resolve } from 'path';

type UploadImageResult = {
  url: string;
  error: string | null;
};

export async function uploadImage(
  formData: FormData,
): Promise<UploadImageResult> {
  const makeResult = (url = '', error: string | null = null) => ({
    url,
    error,
  });

  if (!(formData instanceof FormData)) {
    return makeResult('', 'Invalid form data');
  }

  const file = formData.get('file');

  if (!(file instanceof File)) {
    return makeResult('', 'Arquivo inválido');
  }

  if (file.size > Number(process.env.IMAGE_UPLOAD_MAX_FILE_SIZE_BYTES)) {
    return makeResult('', 'Arquivo muito grande');
  }

  if (!file.type.startsWith('image/')) {
    return makeResult('', 'Imagem inválida');
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const uploadFullPath = resolve(
    process.cwd(),
    'public',
    process.env.IMAGE_UPLOAD_DIRECTORY!,
  );
  await mkdir(uploadFullPath, { recursive: true });

  const fileArrayBuffer: ArrayBuffer = await file.arrayBuffer();
  const buffer: Buffer = Buffer.from(fileArrayBuffer);

  const fileFullPath = resolve(uploadFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);

  const url = `${process.env.IMAGE_SERVER_URL!}/${uniqueImageName}`;

  return makeResult(url);
}

export async function deleteImage(imageUrl: string): Promise<boolean> {
  try {
    const url = new URL(imageUrl);
    const imagePath = url.pathname;
    const imageFileName = imagePath.split('/').pop();
    if (!imageFileName) {
      throw new Error('Invalid image URL');
    }
    const uploadFullPath = resolve(
      process.cwd(),
      'public',
      process.env.IMAGE_UPLOAD_DIRECTORY!,
      imageFileName,
    );
    await import('fs/promises').then(({ unlink }) => unlink(uploadFullPath));
    logColor(`Imagem deletada: ${imageUrl}`, 'green');
    return true;
  } catch (error) {
    logColor(`Erro ao deletar a imagem: ${error}`, 'red');
    return false;
  }
}
