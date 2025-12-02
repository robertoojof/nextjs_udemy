import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  formatDate as formatDateFns,
  formatDistanceToNow,
  isValid,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function simulateDelay(delayMs: number): Promise<void> {
  if (delayMs <= 0) return;

  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), delayMs);
  });
}

export function formatDate(date: string): string {
  const dateObj = new Date(date);

  if (!isValid(dateObj)) {
    throw new Error('Invalid date');
  }

  const fomatedDate = formatDateFns(dateObj, "dd/MM/yyyy 'às' HH:mm");

  return fomatedDate;
}

export function relativeDate(date: string): string {
  const dateObj = new Date(date);

  if (!isValid(dateObj)) {
    throw new Error('Invalid date');
  }

  return formatDistanceToNow(dateObj, {
    locale: ptBR,
    addSuffix: true,
  });
}
