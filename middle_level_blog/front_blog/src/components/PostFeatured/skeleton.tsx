export default function PostFeaturedSkeleton() {
  // Define quantos "cards" de loading você quer mostrar (ex: 4 para preencher o grid lg)
  const numberOfPosts = 1;

  return (
    <div className='grid grid-cols-1 gap-8'>
      {Array.from({ length: numberOfPosts }).map((_, index) => (
        /* IMPORTANTE: Envolvemos tudo numa div para ser O ITEM do grid */
        <div key={index} className='flex flex-row gap-6'>
          {/* Parte da Imagem */}
          <div className='w-full h-48 bg-gray-300 animate-pulse rounded-md'></div>

          {/* Parte do Texto */}
          <div className='w-full mt-2'>
            <div className='block w-56 h-3 mb-4 bg-gray-300 rounded-full animate-pulse'>
              &nbsp;
            </div>
            {/* Linhas de texto simuladas */}
            <div className='space-y-2'>
              <div className='block h-2 bg-gray-300 rounded-full animate-pulse w-full'>
                &nbsp;
              </div>
              <div className='block h-2 bg-gray-300 rounded-full animate-pulse w-full'>
                &nbsp;
              </div>
              <div className='block h-2 bg-gray-300 rounded-full animate-pulse w-full'>
                &nbsp;
              </div>
              <div className='block h-2 bg-gray-300 rounded-full animate-pulse w-full'>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
