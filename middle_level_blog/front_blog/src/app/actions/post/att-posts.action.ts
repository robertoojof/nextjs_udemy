'use server';

import { verifyLoginSession } from '@/lib/login/manage-login';
// import { verifyLoginSession } from '@/lib/login/manage-login';
import { updateTag } from 'next/cache';

type AttPostsActionState = {
  error?: string;
};

export async function attPostsAction(): Promise<AttPostsActionState | void> {
  const isAuthenticated = await verifyLoginSession();

  if (!isAuthenticated) {
    return {
      error: 'Faça login novamente em outra aba',
    };
  }

  updateTag('posts');
}
