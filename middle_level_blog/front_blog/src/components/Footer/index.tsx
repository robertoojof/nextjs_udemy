import { cacheLife, cacheTag } from 'next/cache';
import Link from 'next/link';

async function getCurrentYear(): Promise<number> {
  'use cache';
  cacheTag('footer-current-year');
  cacheLife('days'); // Cache for 1 day

  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear: number = await getCurrentYear();

  return (
    <footer className='pb-14 text-center text-sm text-gray-500'>
      <p>
        &copy; {currentYear} My Simple Blog. All rights reserved -{' '}
        <Link href='/' className='underline'>
          Home
        </Link>
      </p>
    </footer>
  );
}
