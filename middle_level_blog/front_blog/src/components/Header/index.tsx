import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Header({ title }: { title: string }) {
  const headClasses = cn(
    'py-4 mb-8 border-b',
    'border-slate-300 dark:border-slate-700',
  );

  const titleClasses = cn(
    'text-4xl/normal font-extrabold py-8',
    'sm:text-5xl/normal py-10',
    'md:text-6xl/normal py-11',
    'lg:text-7xl/normal py-12',
    // 'xl:text-7xl/normal py-12',
  );

  return (
    <header className={headClasses}>
      <h1 className={titleClasses}>
        <Link href='/' className='cursor-pointer'>
          {title}
        </Link>
      </h1>
    </header>
  );
}
