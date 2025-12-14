import { ManagePostForm } from '@/components/admin/ManagePostForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Criar post',
};


export default async function AdminPostNewPage() {
  return (
    <>
      <h1>Criar post</h1>
      <ManagePostForm />
    </>
  );
}
