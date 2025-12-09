'use server';

// import { verifyLoginSession } from '@/lib/login/manage-login';
import { updateTag } from 'next/cache';

export async function attPostsAction(): Promise<void> {
  // const isAuthenticated = await verifyLoginSession();

  // if (!isAuthenticated) {
  //   return {
  //     error: 'Faça login novamente em outra aba',
  //   };
  // }

  updateTag('posts');
}
