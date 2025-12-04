import { findPostBySlugCached } from '@/lib/posts/queries';
import { PostModel } from '@/models/post/post.model';
import { Metadata } from 'next';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post: PostModel = await findPostBySlugCached(slug);

  return {
    title: `${post.title}`,
    description: `${post.excerpt}`,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post: PostModel = await findPostBySlugCached(slug);

  return (
    <div>
      <h1>Post Slug Page - {post.title}</h1>
      <p>{post.title}</p>
    </div>
  );
}
