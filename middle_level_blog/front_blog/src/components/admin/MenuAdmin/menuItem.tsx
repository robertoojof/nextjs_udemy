'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

export type MenuItemProps = {
  title: string;
  link?: string;
  icon: React.ReactNode;
  target?: '_blank' | '_self';
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function MenuItem({ title, link, icon, target }: MenuItemProps) {
  const linkClasses = cn(
    '[&>svg]:w-4 [&>svg]:h-4 px-4',
    'flex items-center justify-start gap-2',
    'transition hover:bg-slate-700 rounded-lg',
    'h-10',
    'shrink-0',
    'hover:scale-105',
  );

  return (
    <Link href={link ?? ''} className={linkClasses} target={target}>
      {icon}
      <span>{title}</span>
    </Link>
  );
}
