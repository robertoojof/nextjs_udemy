import { cn } from '@/lib/utils';

interface SpinLoaderProps extends React.ComponentProps<'div'> {
  variant?: 'sm' | 'md' | 'lg';
  speed?: 'fast' | 'normal' | 'slow';
}
const sizeMap = {
  sm: 'w-6 h-6 border-2',
  md: 'w-10 h-10 border-4',
  lg: 'w-16 h-16 border-8',
};

const speedMap = {
  fast: ' [animation-duration:0.25s] ',
  normal: ' [animation-duration:0.5s] ',
  slow: ' [animation-duration:1s] ',
};

export default function SpinLoader({
  className,
  variant = 'md',
  speed = 'normal',
  ...props
}: SpinLoaderProps) {
  const containerClasses = cn(
    'flex',
    'justify-center',
    'items-center',
    className,
  );

  return (
    <div className={containerClasses} {...props}>
      <div
        className={cn(
          sizeMap[variant],
          'border-zinc-400 border-t-blue-500',
          'border-t-transparent',
          'rounded-full',
          'animate-spin',
          speedMap[speed],
        )}
      ></div>
    </div>
  );
}
