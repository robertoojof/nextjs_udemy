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
      className={cn('bg-blue-500', 'cursor-pointer')}
    >
      Atualizar Posts
    </button>
  );
}
