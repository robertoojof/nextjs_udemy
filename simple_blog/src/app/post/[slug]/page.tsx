type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Post Slug Page - {slug}</h1>
      <p>This is the post slug page content. </p>
    </div>
  );
}
