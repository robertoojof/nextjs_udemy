import ErrorMessage from '@/components/ErrorMessage';

export default function NotFound() {
  return (
    <ErrorMessage
      pageTitle='404 Not Found'
      contentTitle='404 - Page Not Found'
      content={
        <p className='text-lg text-slate-400'>
          Sorry, the page you are looking for does not exist.
        </p>
      }
    />
  );
}
