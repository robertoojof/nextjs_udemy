import { HeadingTag, PostHeading } from '../PostHeading';
import { PostModel } from '@/models/post/post.model';
import PostDate from '../PostDate';

interface PostSumaryProps {
  post: Pick<PostModel, 'title' | 'excerpt' | 'updatedAt'>;
  postLink: string;
  postHeadingLevel?: HeadingTag;
}

export default function PostSumary({
  post,
  postHeadingLevel = 'h2',
  postLink,
}: PostSumaryProps) {
  return (
    <div className='flex flex-col gap-4 sm:justify-center'>
      <PostDate date={post.updatedAt} />

      <PostHeading as={postHeadingLevel} link={postLink}>
        {post.title}
      </PostHeading>
      <p>{post.excerpt}</p>
    </div>
  );
}
