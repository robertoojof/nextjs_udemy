import { cn } from '@/lib/utils';
import { useId } from 'react';

type InputTextProps = {
  labelText?: string;
  type?: 'text' | 'password' | 'email' | 'number';
} & React.ComponentProps<'input'>;

export function InputText({
  labelText = '',
  type = 'text',
  ...props
}: InputTextProps) {
  const id = useId();

  return (
    <div className='flex flex-col gap-2'>
      {labelText && (
        <label className='text-sm' htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        type={type}
        {...props}
        className={cn(
          'bg-white outline-0 text-base/tight',
          'ring-2 ring-slate-400 rounded',
          'p-2 transition focus:ring-blue-600',
          'placeholder-slate-300',
          'disabled:bg-slate-200',
          'disabled:text-slate-400',
          'disabled:placeholder-slate-300',
          'read-only:bg-slate-100',
          props.className,
        )}
        id={id}
      />
    </div>
  );
}
