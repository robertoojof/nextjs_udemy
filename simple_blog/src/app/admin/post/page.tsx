import PostsListAdmin from '@/components/PostsListAdmin';
import SpinLoader from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader className='mb-16' />}>
      <PostsListAdmin />
    </Suspense>
  );
}
