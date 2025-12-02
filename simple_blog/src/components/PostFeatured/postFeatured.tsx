import { formatDate, formatRelativeDate } from '@/lib/utils';
import PostCoverImage from '../PostCoverImage';
import PostHeading from '../PostHeading';

export default function PostFeatured() {
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{ href: '#' }}
        imageProps={{
          src: '/images/bryen_0.png',
          alt: 'Description',
          width: 1200,
          height: 720,
          className:
            'hover:scale-105 transition w-full h-full object-center object-cover',
          priority: true,
        }}
      />
      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          dateTime='2024-06-01'
          className='text-slate-600 block text-sm/tight select-none'
          title={formatRelativeDate('2024-04-20T10:00:00')}
        >
          {formatDate('2024-06-01')}
        </time>
        <PostHeading
          as='h1'
          link='#'
          className='hover:text-slate-800 transition'
        >
          Welcome to My Simple Blog
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          lobortis augue at lorem venenatis facilisis. Aenean nec pellentesque
          mi, ut rhoncus erat. Cras ante tellus, ultricies non nisl consequat,
          feugiat porta sapien. Duis maximus, eros in convallis ullamcorper,
          quam neque vulputate lorem, quis pretium libero justo ac libero. Donec
          quam justo, efficitur sit amet gravida ut, auctor sed lacus. Nam in
          lorem sed velit sodales ullamcorper in non erat.
        </p>
      </div>
    </section>
  );
}
