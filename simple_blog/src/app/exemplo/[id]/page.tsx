import { formatHour } from '@/lib/utils';
import { revalidateExampleAction } from '../../actions/revalidate.example';

export const dynamic = 'force-static';

export default async function ExemploPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const hora = formatHour(new Date().toISOString());
  const { id } = await params;

  return (
    <div>
      <h2> {hora}</h2>

      <form action={revalidateExampleAction} className='py-16'>
        <input type='hidden' name='path' defaultValue={`/exemplo/${id}`} />
        <button
          type='submit'
          className='bg-amber-300  p-2 rounded hover:bg-amber-400 transition cursor-pointer'
        >
          Revalidate this page
        </button>
      </form>
    </div>
  );
}
