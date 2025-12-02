export default function PostsListSkeleton() {
  return (
    <ul className='mt-4 space-y-2'>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        >
          <div className='w-full h-48 bg-gray-300 animate-pulse rounded-md'></div>
          <div className='w-full h-6 bg-gray-300 animate-pulse rounded-md mt-2'>
            <div className='block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit'>
              &nbsp;
            </div>
            <div className='block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72'>
              &nbsp;
            </div>
            <div className='block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72'>
              &nbsp;
            </div>
            <div className='block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72'>
              &nbsp;
            </div>
            <div className='block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72'>
              &nbsp;
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}
