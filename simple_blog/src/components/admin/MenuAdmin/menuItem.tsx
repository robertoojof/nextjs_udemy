'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

export type MenuItemProps = {
  title: string;
  link: string;
  icon: React.ReactNode;
  target?: '_blank' | '_self';
  onClickAction?: () => void;
};

export default function MenuItem({
  title,
  link,
  icon,
  target,
  onClickAction,
}: MenuItemProps) {
  const linkClasses = cn(
    '[&>svg]:w-4 [&>svg]:h-4 px-4',
    'flex items-center justify-start gap-2',
    'transition hover:bg-slate-700 rounded-lg',
    'h-10',
    'shrink-0',
    'hover:scale-105',
  );

  return (
    <Link
      href={link}
      className={linkClasses}
      target={target}
      onClick={onClickAction}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}
