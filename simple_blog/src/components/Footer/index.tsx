import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='pb-14 text-center text-sm text-gray-500'>
      <p>
        &copy; {new Date().getFullYear()} My Simple Blog. All rights reserved -{' '}
        <Link href='/' className='underline'>
          Home
        </Link>
      </p>
    </footer>
  );
}
