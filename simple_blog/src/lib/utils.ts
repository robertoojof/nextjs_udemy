import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function simulateDelay(delayMs: number): Promise<void> {
  if (delayMs <= 0) return;

  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), delayMs);
  });
}
