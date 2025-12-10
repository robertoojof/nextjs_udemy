'use client';

import { cn } from '@/lib/utils';
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  const navClasses = cn(
    'bg-slate-900 text-slate-100 rounded-lg',
    'flex flex-col mb-8',
    'sm:flex-row sm:flex-wrap',
    'transition-all duration-300 ease-in-out',
    !isOpen ? 'max-h-10 overflow-hidden' : 'max-h-[300px]',
    'sm:overflow-visible sm:h-auto',
  );

  const linkClasses = cn(
    '[&>svg]:w-4 [&>svg]:h-4 px-4',
    'flex items-center justify-start gap-2',
    'transition hover:bg-slate-700 rounded-lg',
    'h-10',
    'shrink-0',
    'hover:scale-105',
  );

  const openCloseBtnClasses = cn(
    linkClasses,
    'hover:scale-100 cursor-pointer',
    'text-blue-200 italic',
    'sm:hidden',
  );

  return (
    <nav className={navClasses}>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={openCloseBtnClasses}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}
        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>

      <button onClick={() => setIsOpen(false)}>
        <Link className={linkClasses} href='/' target='_blank'>
          <HouseIcon />
          Home
        </Link>
      </button>

      <button onClick={() => setIsOpen(false)}>
        <Link className={linkClasses} href='/admin/post'>
          <FileTextIcon />
          Posts
        </Link>
      </button>

      <button onClick={() => setIsOpen(false)}>
        <Link className={linkClasses} href='/admin/post/new'>
          <PlusIcon />
          Criar post
        </Link>
      </button>
    </nav>
  );
}
