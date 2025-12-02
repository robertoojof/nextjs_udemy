import { postRepository } from '@/repositories/post';
import PostCoverImage from '../PostCoverImage';
import PostSumary from '../PostSumary';

export default async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {posts.map(post => {
        const postLink = `/posts/${post.slug}`;

        return (
          <div key={post.id} className='flex flex-col gap-4 group '>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                src: post.coverImageUrl,
                alt: post.title,
                width: 1200,
                height: 720,
              }}
            />

            <PostSumary post={post} postLink={postLink} />
          </div>
        );
      })}
    </div>
  );
}
