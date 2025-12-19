import { cn } from '@/lib/utils';

function createVariantMap<
  TVariants extends Record<string, string>,
  TSizes extends Record<string, string>,
>(variants: TVariants, sizes: TSizes) {
  return {
    variants,
    sizes,
    classes: ({
      variant,
      size,
      className,
    }: {
      variant: keyof TVariants;
      size: keyof TSizes;
      className?: string;
    }) => cn(variants[variant], sizes[size], className),
  };
}

const buttonMap = createVariantMap(
  {
    default: cn('bg-blue-600 hover:bg-blue-700 text-blue-100'),
    ghost: cn('bg-slate-300 hover:bg-slate-400 text-slate-950'),
    danger: cn('bg-red-600 hover:bg-red-700 text-red-100'),
  },
  {
    sm: cn(
      'text-xs/tight',
      'py-1',
      'px-2',
      'rounded-sm',
      '[&_svg]:w-3 [&_svg]:h-3 gap-1',
    ),
    md: cn(
      'text-base/tight',
      'py-2',
      'px-4',
      'rounded-md',
      '[&_svg]:w-4 [&_svg]:h-4 gap-2',
    ),
    lg: cn(
      'text-lg/tight',
      'py-4',
      'px-6',
      'rounded-lg',
      '[&_svg]:w-5 [&_svg]:h-5 gap-3',
    ),
  },
);

type ButtonVariants = keyof typeof buttonMap.variants;
type ButtonSizes = keyof typeof buttonMap.sizes;

type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
} & React.ComponentProps<'button'>;

export function Button({
  variant = 'default',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(
    buttonMap.classes({ variant, size, className }),
    'flex items-center justify-center cursor-pointer',
    'transition',
    'disabled:bg-slate-200',
    'disabled:text-slate-400',
    'disabled:cursor-not-allowed',
  );

  return <button {...props} className={buttonClasses} />;
}
