import { findPostBySlugCached } from '@/lib/posts/queries';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return (
    <div>
      <h1>Post Slug Page - {post.title}</h1>
      <p>{post.title}</p>
    </div>
  );
}
