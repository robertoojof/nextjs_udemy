'use client';

import { cn } from '@/lib/utils';
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import MenuItem, { MenuItemProps } from './menuItem';
import { usePathname } from 'next/navigation';

const menuItens: MenuItemProps[] = [
  {
    title: 'Home',
    link: '/',
    target: '_blank',
    icon: <HouseIcon />,
  },
  {
    title: 'Posts',
    link: '/admin/post',
    icon: <FileTextIcon />,
  },
  {
    title: 'Criar post',
    link: '/admin/post/new',
    icon: <PlusIcon />,
  },
];

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const navClasses = cn(
    'bg-slate-900 text-slate-100 rounded-lg',
    'flex flex-col mb-8',
    'sm:flex-row sm:flex-wrap',
    'transition-all duration-300 ease-in-out',
    !isOpen ? 'max-h-10 overflow-hidden' : 'max-h-[300px] overflow-y-auto',
    'sm:overflow-visible sm:h-auto',
  );

  const openCloseBtnClasses = cn(
    '[&>svg]:w-4 [&>svg]:h-4 px-4',
    'flex items-center justify-start gap-2',
    'transition hover:bg-slate-700 rounded-lg',
    'h-10',
    'shrink-0',
    'hover:scale-100 cursor-pointer',
    'text-blue-200 italic',
    'sm:hidden',
  );

  return (
    <nav className={navClasses}>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={openCloseBtnClasses}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {!isOpen ? (
          <>
            <MenuIcon /> Menu
          </>
        ) : (
          <>
            <CircleXIcon /> Fechar
          </>
        )}
      </button>

      {menuItens.map((item, index) => (
        <MenuItem key={`nav-item-${item.title}-${index}`} {...item} />
      ))}
    </nav>
  );
}
