'use server';

import { PostCreateSchema } from '@/app/post/validations';
import { drizzleDB } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';
import { makePartialPublicPost, PublicPost } from '@/dto/post/post.dto';
import { PostModel } from '@/models/post/post.model';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { makeSlugFromText } from '@/utils/make-slug-from-text';
import { updateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { v4 as uuid } from 'uuid';

type createPostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: createPostActionState,
  formData: FormData,
): Promise<createPostActionState> {
  // TODO: verificar se o usuário tá logado

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados de formulário inválidos'],
    };
  }

  // const title = formData.get('title')?.toString() || '';
  const formDataToObj = Object.fromEntries(formData.entries());
  const zodParsedObj = PostCreateSchema.safeParse(formDataToObj);

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error.format());
    return {
      formState: makePartialPublicPost(formDataToObj),
      errors: errors,
    };
  }

  const validPostData = zodParsedObj.data;
  const newPost: PostModel = {
    ...validPostData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: uuid(),
    slug: makeSlugFromText(validPostData.title),
  };

  // TODO: mover este método para o repositório
  await drizzleDB.insert(postsTable).values(newPost);

  updateTag('posts');
  redirect(`/admin/post/${newPost.id}`);
}
