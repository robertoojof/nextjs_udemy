type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;

  // throw new Error('Not implemented yet');

  return (
    <div>
      <h1>Admin Post {id} Page</h1>
    </div>
  );
}
