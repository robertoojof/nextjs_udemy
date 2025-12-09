'use client';

import { attPostsAction } from '@/app/actions/post/att-posts.action';
import { cn } from '@/lib/utils';
import { useTransition } from 'react';

export default function AttPostsButton() {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      await attPostsAction();
    });
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className={cn(
        'bg-blue-500 hover:bg-blue-600 rounded-xl p-2 m-3',
        `${isPending ? 'cursor-not-allowed' : 'hover:bg-blue-600 cursor-pointer'}`,
        'text-white',
      )}
    >
      {isPending ? 'Atualizando...' : 'Atualizar Posts'}
    </button>
  );
}
