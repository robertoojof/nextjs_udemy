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

export function formatDate(date: string): string {
  const dateObj = new Date(date);

  if (!isValid(dateObj)) {
    throw new Error('Invalid date');
  }

  const fomatedDate = formatDateFns(dateObj, "dd/MM/yyyy 'às' HH:mm");

  return fomatedDate;
}

export function formatRelativeDate(date: string): string {
  const dateObj = new Date(date);

  if (!isValid(dateObj)) {
    throw new Error('Invalid date');
  }

  return formatDistanceToNow(dateObj, {
    locale: ptBR,
    addSuffix: true,
  });
}

export function formatHour(date: string): string {
  const dateObj = new Date(date);

  if (!isValid(dateObj)) {
    throw new Error('Invalid date');
  }

  const fomatedDate = formatDateFns(dateObj, 'HH:mm:ss');

  return fomatedDate;
}
