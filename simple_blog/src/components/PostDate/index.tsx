import { formatDate, formatRelativeDate } from '@/lib/utils';

interface PostDateProps {
  date: string;
  className?: string;
}

export default function PostDate({ date }: PostDateProps) {
  return (
    <time
      dateTime={date}
      className='text-slate-600 text-sm/tight select-none'
      title={formatRelativeDate(date)}
    >
      {formatDate(date)}
    </time>
  );
}
