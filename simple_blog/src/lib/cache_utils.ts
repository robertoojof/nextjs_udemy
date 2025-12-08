'use cache';

import { isValid, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cacheTag, cacheLife } from 'next/cache';

export async function formatRelativeDateCached(date: string): Promise<string> {
  'use cache';
  cacheTag('relative-date');
  cacheLife('weeks'); 

  const dateObj = new Date(date);

  if (!isValid(dateObj)) {
    throw new Error('Invalid date');
  }

  return formatDistanceToNow(dateObj, {
    locale: ptBR,
    addSuffix: true,
  });
}
