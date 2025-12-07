// 'use server';

// import { formatHourCached } from '@/lib/utils.example';
// import { revalidateExampleAction } from '../../actions/revalidate.example';

// // export const dynamic = 'force-static';

// export default async function ExemploPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;

//   const hora = await formatHourCached();

//   return (
//     <div>
//       <h1>Exemplo {id}</h1>
//       <h2> {hora}</h2>

//       <form action={revalidateExampleAction} className='py-16'>
//         <input type='hidden' name='path' defaultValue={`/exemplo/${id}`} />
//         <button
//           type='submit'
//           className='bg-amber-300  p-2 rounded hover:bg-amber-400 transition cursor-pointer'
//         >
//           Revalidate this page
//         </button>
//       </form>
//     </div>
//   );
// }

export default function ExemploPage() {
  return <div>Exemplo Page</div>;
}
