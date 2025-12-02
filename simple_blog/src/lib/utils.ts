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
  if (!date || isValid(date) === false) {
    throw new Error('Invalid date provided to formatDate function.');
  }

  return formatDateFns(new Date(date), "dd/MM/yyyy 'às' HH:mm");
}

export function relativeDate(date: string): string {
  if (!date || isValid(date) === false) {
    throw new Error('Invalid date provided to relativeDate function.');
  }

  return formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  });
}
