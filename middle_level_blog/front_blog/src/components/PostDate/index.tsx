import { formatRelativeDateCached } from '@/lib/cache_utils';
import { formatDate } from '@/lib/utils';

interface PostDateProps {
  date: string;
  className?: string;
}

export default async function PostDate({ date }: PostDateProps) {
  return (
    <time
      dateTime={date}
      className='text-slate-600 text-sm/tight select-none'
      title={await formatRelativeDateCached(date)}
    >
      {formatDate(date)}
    </time>
  );
}
