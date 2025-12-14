'use server';

import { PublicPost } from '@/dto/post/post.dto';

type createPostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: createPostActionState,
  formData: FormData,
): Promise<createPostActionState> {
  const title = formData.get('title')?.toString() || '';

  return { formState: { ...prevState.formState, title }, errors: [] };
}
