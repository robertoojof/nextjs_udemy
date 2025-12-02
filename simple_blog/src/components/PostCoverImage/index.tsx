import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PostCoverImageProps {
  linkProps: React.ComponentProps<typeof Link>;
  imageProps: React.ComponentProps<typeof Image>;
}

export default function PostCoverImage({
  linkProps,
  imageProps,
}: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={cn(
        ' w-full h-full overflow-hidden rounded-xl',
        linkProps.className,
      )}
    >
      <Image
        width={1200}
        height={720}
        {...imageProps}
        alt={imageProps.alt}
        className={cn(
          'hover:scale-105 transition w-full h-full object-center object-cover',
          imageProps.className,
        )}
      />
    </Link>
  );
}
