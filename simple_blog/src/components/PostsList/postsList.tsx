import { postRepository } from '@/repositories/post';

export default async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <ul className='mt-4 space-y-2'>
      {posts.map(post => (
        <li
          key={post.id}
          className='p-4 border rounded-md hover:shadow-md transition-shadow'
        >
          <h2 className='text-xl font-semibold'>{post.title}</h2>
          <p className='text-gray-600'>{post.content}</p>
        </li>
      ))}
    </ul>
  );
}
