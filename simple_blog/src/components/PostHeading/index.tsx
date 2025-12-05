import { cn } from '@/lib/utils';
import Link from 'next/link';

export type HeadingTag = 'h1' | 'h2';

interface PostHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  link: string;
  as?: HeadingTag;
}

export function PostHeading({
  children,
  link,
  as: Tag = 'h2',
}: PostHeadingProps) {
  const commonClasses = 'font-extrabold';

  const headingClassesMap = new Map<string, string>([
    ['h1', 'text-4xl/tight  sm:text-4xl/tight'],
    ['h2', 'text-2xl/tight'],
  ]);

  return (
    <Tag className={cn(headingClassesMap.get(Tag), commonClasses)}>
      <Link href={link} className='hover:text-slate-800 transition'>
        {children}
      </Link>
    </Tag>
  );
}
