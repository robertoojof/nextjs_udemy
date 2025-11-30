export default function PostsListSkeleton() {
  return (
    <ul className='mt-4 space-y-2'>
      {[...Array(5)].map((_, index) => (
        <li key={index} className='p-4 border rounded-md  bg-gray-200'>
          <h2 className='text-xl font-semibold animate-pulse bg-gray-300 h-6 mb-2 rounded'></h2>
          <p className='text-gray-600 animate-pulse bg-gray-300 h-4 rounded'></p>
        </li>
      ))}
    </ul>
  );
}
