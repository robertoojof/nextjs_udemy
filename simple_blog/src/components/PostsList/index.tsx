import { Suspense } from 'react';
import PostsListSkeleton from './skeleton';
import PostsListComponent from './postsList';

export default async function PostsList() {
  return (
    <>
      <Suspense fallback={<PostsListSkeleton />}>
        <PostsListComponent />
      </Suspense>
    </>
  );
}
