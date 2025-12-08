import { PostModel } from '@/models/post/post.model';
import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findPostByIdAdmin = cache(async function findPostByIdAdmin(
  id: string,
): Promise<PostModel> {
  return await postRepository.findById(id);
});
