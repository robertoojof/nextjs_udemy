import { Suspense } from 'react';
import PostsListSkeleton from './skeleton';
import PostsListComponent from './postsList';
import { PostFeatured, PostFeaturedSkeleton } from '../PostFeatured';

export default async function PostsList() {
  return (
    <>
      <Suspense fallback={<PostFeaturedSkeleton />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<PostsListSkeleton />}>
        <PostsListComponent />
      </Suspense>
    </>
  );
}
