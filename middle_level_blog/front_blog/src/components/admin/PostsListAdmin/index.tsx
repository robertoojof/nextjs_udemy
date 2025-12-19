import { findAllPostAdmin } from '@/lib/posts/queries/admin';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import DeletePostButton from '../DeletePostButton';
import ErrorMessage from '@/components/ErrorMessage';
import AttPostsButton from '../AttPostsButton';

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();

  if (posts.length === 0) {
    return (
      <>
        <ErrorMessage
          contentTitle='Ops 🏜️'
          content={
            <>
              <p>Nenhum post criado por enquanto...</p>
              <AttPostsButton />
            </>
          }
        />
      </>
    );
  }

  return (
    <div className='mb-16'>
      {posts.map(post => {
        return (
          <div
            className={cn(
              'py-2 px-2',
              !post.published && 'italic',
              'flex gap-2 items-center justify-between rounded-md',
              'hover:bg-slate-300 hover:scale-105 transition-transform ease-in-out duration-200',
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className='text-xs text-slate-600 italic '>
                (Não publicado)
              </span>
            )}

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
