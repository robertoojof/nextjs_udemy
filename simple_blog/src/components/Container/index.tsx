export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='text-slate-900 bg-slate-100 min-h-screen dark:bg-slate-900 dark:text-slate-100'>
      <div className='max-w-5xl px-8'>{children}</div>
    </div>
  );
}
