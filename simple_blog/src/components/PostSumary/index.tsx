import { formatDate, formatRelativeDate } from '@/lib/utils';
import { HeadingTag, PostHeading } from '../PostHeading';
import { PostModel } from '@/models/post/post.model';

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
      <time
        dateTime={post.updatedAt}
        className='text-slate-600 block text-sm/tight select-none'
        title={formatRelativeDate(post.updatedAt)}
      >
        {formatDate(post.updatedAt)}
      </time>

      <PostHeading as={postHeadingLevel} link={postLink}>
        {post.title}
      </PostHeading>
      <p>{post.excerpt}</p>
    </div>
  );
}
