import PostsList from '@/components/PostsList';

export default function Home() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold underline'>Posts</h1>
      <PostsList />
    </div>
  );
}
