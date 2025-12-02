import { PostModel } from '@/models/post/post.model';
import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findAllPublicPosts = cache(
  async function findAllPublicPosts(): Promise<PostModel[]> {
    return await postRepository.findAllPublic();
  },
);
