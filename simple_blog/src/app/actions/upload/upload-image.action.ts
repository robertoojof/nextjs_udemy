'use server';

import { logColor } from '@/utils/log-color';

export async function uploadImage(formData: FormData) {
  logColor('Ação de upload de imagem executada!');

  return {
    bina: 'voce vem com nois',
  };
}
