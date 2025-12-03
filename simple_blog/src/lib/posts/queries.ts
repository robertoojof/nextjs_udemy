import { PostModel } from '@/models/post/post.model';
import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsCached = cache(
  async function findAllPublicPostsCached(): Promise<PostModel[]> {
    return await postRepository.findAllPublic();
  },
);

export const findPostBySlugCached = cache(async function findPostBySlugCached(
  slug: string,
): Promise<PostModel> {
  const post = await postRepository.findBySlug(slug).catch(() => null);

  if (!post) {
    console.log('Erro'); 
    notFound();
  }

  return post;
});

export const findPostByIdCached = cache(async function findPostByIdCached(
  id: string,
): Promise<PostModel> {
  return await postRepository.findById(id);
});
